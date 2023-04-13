import http from "./httpService";

export const addNewContact = (data) => {
   return http.post("/contacts", data);
};
