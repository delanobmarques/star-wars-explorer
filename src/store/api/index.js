import axios from "axios";

const url = "https://swapi.dev/api/";

export const fetchMovies = () => axios.get(`${url}films/`);
export const fetchPeople = () => axios.get(`${url}people/`);
export const fetchPlanets = () => axios.get(`${url}planets/`);
