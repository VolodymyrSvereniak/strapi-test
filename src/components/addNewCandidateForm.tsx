export default function AddNewCandidateForm() {
  return (
    <>
      <div>
        <label htmlFor=""></label>
        <input
          className="w-full rounded-lg h-[40px] p-5 outline-none"
          type="text"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor=""></label>
        <input
          className="w-full rounded-lg h-[40px] p-5 outline-none"
          type="text"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label htmlFor=""></label>
        <textarea
          className="w-full h-[100px] rounded-lg p-5 outline-none"
          placeholder="Enter resume"
        />
      </div>

      <div>
        <label htmlFor=""></label>
        <input
          className="w-full rounded-lg h-[40px] p-5 outline-none"
          type="text"
          placeholder="Enter position applied for"
        />
      </div>
    </>
  );
}
