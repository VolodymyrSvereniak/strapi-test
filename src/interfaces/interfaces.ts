export interface CandidatesData {
  documentId: number;
  name: string;
  email: string;
  resume: string;
  positionAppliedFor: string;
}

export interface VacanciesData {
  documentId: number;
  title: string;
  description: string;
  salary: number;
  location: string;
  requirements: string;
}
