import { useState, useMemo } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AddNewVacancyForm from "./addNewVacancyForm";
import AddNewCandidateForm from "./addNewCandidateForm";
import addData from "../services/addData";
import useCandidatesStore from "./store/candidatesStore";

export default function CreateEntity() {
  const [dataType, setDataType] = useState("");

  const { register, handleSubmit } = useForm();

  const revalidateCandidates = useCandidatesStore(
    (state) => state.revalidateCandidates
  );

  console.log(dataType);

  const renderForm = useMemo(() => {
    if (dataType === "candidates") {
      return <AddNewCandidateForm register={register} />;
    }
    if (dataType === "vacancies") {
      return <AddNewVacancyForm />;
    }
    return null;
  }, [dataType, register]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    addData(dataType, data);

    revalidateCandidates(data);
  };

  return (
    <div className="flex flex-col items-center w-[20rem]">
      <h1 className="font-bold text-3xl pb-5">Create entity</h1>
      <form
        className="flex flex-col gap-5 w-full h-fit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <div>
            <label className="pr-2 font-bold" htmlFor="vacancies">
              Vacancies
            </label>
            <input
              type="radio"
              id="vacancies"
              name="choice"
              value="vacancies"
              onChange={(e) => setDataType(e.target.value)}
            />
          </div>

          <div>
            <label className="pr-2 font-bold" htmlFor="candidates">
              Candidates
            </label>
            <input
              type="radio"
              id="candidates"
              name="choice"
              value="candidates"
              onChange={(e) => setDataType(e.target.value)}
            />
          </div>
        </div>
        {renderForm}
        {dataType && (
          <button className="self-center bg-black rounded-lg text-white w-[100px] h-fit p-2 hover:bg-black/60">
            Add
          </button>
        )}
      </form>
    </div>
  );
}
