import { lazy, Suspense } from "react";

const LazyVacanciesList = lazy(() => import("./components/VacanciesList"));
const LazyCandidatesList = lazy(() => import("./components/CandidatesList"));

function App() {
  return (
    <main className="flex justify-between bg-gray-400 w-screen h-screen">
      <Suspense fallback={<div>Loading</div>}>
        <LazyVacanciesList />
      </Suspense>
      <button className="">Open form to add vacancy/candidate</button>
      <Suspense fallback={<div>Loading</div>}>
        <LazyCandidatesList />
      </Suspense>
    </main>
  );
}

export default App;
