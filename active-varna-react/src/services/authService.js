import { requestFactory } from "./requester";

const baseUrl = `http://localhost:3000/users`;
// const baseUrl = `https://####`;

export const authServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    login: (data) => request.post(`${baseUrl}/login`, data),
    register: (data) => request.post(`${baseUrl}/register`, data),
    logout: () => request.get(`${baseUrl}/logout`),
  };
};
