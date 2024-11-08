import axios from "axios";

export default async function deleteData(dataType: string, documentId: number) {
  try {
    await axios.delete(`http://localhost:1337/api/${dataType}/${documentId}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
