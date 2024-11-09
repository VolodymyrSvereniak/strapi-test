import { FieldValues, UseFormRegister } from "react-hook-form";

interface AddNewCandidateFormProps {
  register: UseFormRegister<FieldValues>;
}

export default function AddNewCandidateForm({
  register,
}: AddNewCandidateFormProps) {
  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="w-full rounded-lg h-[40px] p-5 outline-none"
          type="text"
          id="name"
          placeholder="Enter name"
          {...register("name")}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          className="w-full rounded-lg h-[40px] p-5 outline-none"
          type="text"
          id="email"
          placeholder="Enter email"
          {...register("email")}
        />
      </div>

      <div>
        <label htmlFor="resume">Resume</label>
        <textarea
          className="w-full h-[100px] rounded-lg p-5 outline-none"
          id="resume"
          placeholder="Enter resume"
          {...register("resume")}
        />
      </div>
    </>
  );
}
