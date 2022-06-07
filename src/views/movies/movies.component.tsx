import { Fragment } from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import ListMovies from "../../Components/Movies-List/movies-list.component";

const Movies = () => {    
    return (
        <Fragment>
            <Navbar displayText="Movies" />
            <ListMovies />
        </Fragment>
    );  
};

export default Movies;