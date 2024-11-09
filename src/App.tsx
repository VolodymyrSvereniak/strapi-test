import { lazy, Suspense, useState } from "react";
import CreateEntity from "./components/CreateEntity";

const LazyVacanciesList = lazy(() => import("./components/VacanciesList"));
const LazyCandidatesList = lazy(() => import("./components/CandidatesList"));

function App() {
  const [isOpenForm, setIsOpenForm] = useState(true);

  return (
    <main className="flex justify-between px-5 bg-gray-400 w-screen h-screen">
      <Suspense fallback={<div>Loading</div>}>
        <LazyVacanciesList />
      </Suspense>
      <div className="flex flex-col items-center gap-7 pt-5">
        <button
          className="bg-black rounded-lg text-white w-fit h-fit p-2 hover:bg-black/60"
          onClick={() => setIsOpenForm((prev) => !prev)}
        >
          Open Form
        </button>
        {isOpenForm && <CreateEntity />}
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <LazyCandidatesList />
      </Suspense>
    </main>
  );
}

export default App;
