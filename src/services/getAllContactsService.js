import http from "./httpService";

export const getAllContacts = () => {
   return http.get("/contacts");
};
