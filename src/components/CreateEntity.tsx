// import { useState } from "react";
// import AddNewVacancyForm from "./addNewVacancyForm";
import AddNewCandidateForm from "./addNewCandidateForm";

export default function CreateEntity() {
//   const [dataType, setDataType] = useState("vacancies");

  return (
    <div className="flex flex-col items-center w-[20rem]">
      <h1 className="font-bold text-3xl pb-5">Create entity</h1>
      <form className="flex flex-col gap-5 w-full h-fit">
        <div className="flex justify-between">
          <div>
            <label htmlFor="vacancies">Vacancies</label>
            <input type="radio" id="vacancies" name="choice" value="option1" />
          </div>

          <div>
            <label htmlFor="candidates">Candidates</label>
            <input type="radio" id="candidates" name="choice" value="option1" />
          </div>
        </div>
        <AddNewCandidateForm />
        <button className="self-center bg-black rounded-lg text-white w-[100px] h-fit p-2 hover:bg-black/60">
          Add
        </button>
      </form>
    </div>
  );
}
