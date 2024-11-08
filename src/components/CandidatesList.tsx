import getData from "../services/getData";
import { CandidatesData } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState<CandidatesData[] | []>([]);

  console.log(candidates);

  useEffect(() => {
    getData<CandidatesData>("candidates", setCandidates);
  }, []);

  return (
    <div className="flex items-start pl-5 flex-col">
      {" "}
      <div className="flex flex-col text-center gap-5 px-5 bg-gray-400">
        <h1 className="font-bold text-3xl">Candidates</h1>{" "}
        {candidates.map((candidate) => (
          <div
            className="w-[300px] h-fit bg-gray-600 rounded-lg py-2"
            key={candidate.documentId}
          >
            {" "}
            <h2>{candidate.name}</h2> <h3>{candidate.email}</h3>{" "}
            <h3>{candidate.resume}</h3>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default CandidatesList;
