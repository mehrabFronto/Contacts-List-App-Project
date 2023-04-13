import http from "./httpService";

export const deleteContact = (id) => {
   return http.delete(`/contacts/${id}`);
};
