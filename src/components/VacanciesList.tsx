import { useEffect, useState } from "react";
import getData from "../services/getData";
import { VacanciesData } from "../types/interfaces";
import deleteData from "../services/deleteData";

const VacanciesList = () => {
  const [vacancies, setVacancies] = useState<VacanciesData[] | []>([]);

  console.log(vacancies);

  const handleDeleteVacancy = (documentId: number) => {
    deleteData("vacancies", documentId);

    setVacancies(
      vacancies.filter((vacancy) => vacancy.documentId !== documentId)
    );
  };

  useEffect(() => {
    getData<VacanciesData>("vacancies", setVacancies);
  }, []);

  return (
    <div className="flex items-start flex-col">
      <div className="flex flex-col text-center gap-5 bg-gray-400">
        <h1 className="font-bold text-3xl">Vacancies</h1>
        {vacancies.map((vacancy) => (
          <div
            className="w-[300px] h-fit bg-gray-600 rounded-lg py-2"
            key={vacancy.documentId}
          >
            <h2>{vacancy.title}</h2> <h3>{vacancy.location}</h3>
            <h3>{vacancy.salary} USD</h3> <p>{vacancy.description}</p>
            <h3>{vacancy.requirements}</h3>
            <button
              className="bg-black text-white rounded-lg mt-2 py-1 px-3 hover:bg-black/60"
              onClick={() => handleDeleteVacancy(vacancy.documentId)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacanciesList;
