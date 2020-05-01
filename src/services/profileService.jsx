import { baseAPIURL } from "./baseAPI";

const getUsers = async (page) => {
  let url = `${baseAPIURL}/users`;
  if (page) {
    url += `?page=${page}`;
  }
  const result = await fetch(`${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok === true) return response.json();
    else return [];
  });
  return result;
};

export default getUsers;
