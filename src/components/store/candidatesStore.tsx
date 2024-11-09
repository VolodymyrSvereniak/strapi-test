import { create } from "zustand";
import { CandidatesData } from "../../types/interfaces";
import { FieldValues } from "react-hook-form";

interface CandidatesStore {
  candidates: CandidatesData[];
  setCandidates: (data: CandidatesData[]) => void;
  revalidateCandidates: (newCandidate: FieldValues) => void;
}

const useCandidatesStore = create<CandidatesStore>((set) => ({
  candidates: [],
  setCandidates: (candidates) => set({ candidates }),
  revalidateCandidates: (newCandidate) =>
    //@ts-expect-error Argument of type 'CandidatesData' is not assignable to parameter of type 'CandidatesData'.
    set((state) => {
      return { candidates: [...state.candidates, newCandidate] };
    }),
}));

export default useCandidatesStore;
