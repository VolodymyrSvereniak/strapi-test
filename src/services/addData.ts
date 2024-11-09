import axios from "axios";

export default async function addData(dataKey: string, documentId: number) {
  try {
    await axios.post(`http://localhost:1337/api/${dataKey}/${documentId}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
