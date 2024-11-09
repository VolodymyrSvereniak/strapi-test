import axios from "axios";
import { FieldValues } from "react-hook-form";

export default async function addData(dataKey: string, data: FieldValues) {
  try {
    await axios.post(
      `http://localhost:1337/api/${dataKey}`,
      { data: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
