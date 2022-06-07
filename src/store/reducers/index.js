import {combineReducers } from '@reduxjs/toolkit'

import movies from "./movies";
import people from "./people";
import planets from "./planets";

export default combineReducers({ movies, people, planets });
