import axios from "../../helpers/axios";

export async function fetchName() {
  const response = await axios.get("/users");
  return response.data.data;
}
