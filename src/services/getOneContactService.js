import http from "./httpService";

export const getOneContact = (id) => {
   return http.get(`/contacts/${id}`);
};
