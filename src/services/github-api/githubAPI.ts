import axios from "axios";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

export const getUser = async (username: string) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};

export const getUserRepos = async (username: string) => {
  const response = await githubAPI.get(`/users/${username}/repos`);
  return response.data;
};
