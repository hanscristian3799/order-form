import axios from "../../helpers/axios";

export async function fetchName() {
  const response = await axios.get("/users");
  console.log("DATA", response.data.data);
  return response.data.data;
}
