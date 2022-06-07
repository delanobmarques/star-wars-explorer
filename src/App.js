import Home from './views/home/home.component';
import Menu from './views/menu/menu.component';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from './Components/Spinner/spinner.component';

const LazyLoadPlanets = lazy(() => import('./views/planets/planets.component'));
const LazyLoadMovies = lazy(() => import('./views/movies/movies.component'));
const LazyLoadPeople = lazy(() => import('./views/people/people.component'));
const LazyLoadPeopleCard = lazy(() => import('./Components/People-Card/people-card.component'));
const LazyLoadPlanetCard = lazy(() => import('./Components/Planet-Card/planet-card.component'));
const LazyLoadMovieCard = lazy(() => import('./Components/Movie-Card/movie-card.component'));

const App = () => {  

  return (
	<BrowserRouter>
		<Routes>
			<Route path={'/'} element={<Home />} />					
			<Route path='/menu' element={<Menu/>} />			
			<Route 
				path='/planets' 
				element={
					<Suspense fallback={<Spinner>Loading Planets</Spinner>}>
						<LazyLoadPlanets />
					</Suspense>} 
			/>
			<Route 
				path='/planets/:itemId' 
				element={
					<Suspense fallback={<Spinner>Loading Planet Card</Spinner>}>
						<LazyLoadPlanetCard />
					</Suspense>} 
			/>
			<Route 
				path='/movies' 
				element={
					<Suspense fallback={<Spinner>Loading Movies</Spinner>}>
						<LazyLoadMovies />
					</Suspense>} 
			/>
			<Route 
				path='/movies/:itemId' 
				element={
					<Suspense fallback={<Spinner>Loading Movie Card</Spinner>}>
						<LazyLoadMovieCard />
					</Suspense>} 
			/>						
			<Route 
				path='/people' 
				element={
					<Suspense fallback={<Spinner>Loading People</Spinner>}>
						<LazyLoadPeople />
					</Suspense>} 
			/>
			<Route 
				path='/people/:itemId' 
				element={
					<Suspense fallback={<Spinner>Loading People Card</Spinner>}>
						<LazyLoadPeopleCard />
					</Suspense>} 
			/>
		</Routes>
	</BrowserRouter>
  );
}

export default App;