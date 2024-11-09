import getData from "../services/getData";
import deleteData from "../services/deleteData";
import useCandidatesStore from "./store/candidatesStore";
import { CandidatesData } from "../types/interfaces";
import { useEffect } from "react";

const CandidatesList = () => {
  const candidates = useCandidatesStore((state) => state.candidates);
  const setCandidates = useCandidatesStore((state) => state.setCandidates);

  console.log(candidates);

  const handleDeleteCandidate = (documentId: number) => {
    deleteData("candidates", documentId);

    setCandidates(
      candidates.filter((candidate) => candidate.documentId !== documentId)
    );
  };

  useEffect(() => {
    // @ts-expect-error Argument of type 'CandidatesData' is not assignable to parameter of type 'SetStateAction<CandidatesData[] | []>'.
    getData<CandidatesData>("candidates", setCandidates);
  }, [setCandidates]);

  return (
    <div className="flex items-start pl-5 flex-col">
      <div className="flex flex-col text-center gap-5 px-5 bg-gray-400">
        <h1 className="font-bold text-3xl">Candidates</h1>
        {candidates.map((candidate) => (
          <div
            className="w-[300px] h-fit bg-gray-600 rounded-lg py-2"
            key={candidate.documentId}
          >
            <h2>{candidate.name}</h2> <h3>{candidate.email}</h3>
            <h3>{candidate.resume}</h3> <div>Related vacancies</div>
            <button
              className="bg-black text-white rounded-lg mt-2 py-1 px-3 hover:bg-black/60"
              onClick={() => handleDeleteCandidate(candidate.documentId)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesList;
