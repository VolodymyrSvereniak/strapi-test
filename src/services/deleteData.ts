import axios from "axios";

export default async function deleteData(dataKey: string, documentId: number) {
  try {
    await axios.delete(`http://localhost:1337/api/${dataKey}/${documentId}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
