import axios from "axios";
import { SetStateAction } from "react";

export default async function getData<T>(
  dataKey: string,
  setData: (data: SetStateAction<T[] | []>) => void
) {
  try {
    const response = await axios.get(`http://localhost:1337/api/${dataKey}`);
    const request = await response.data.data;
    return setData(request);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}
