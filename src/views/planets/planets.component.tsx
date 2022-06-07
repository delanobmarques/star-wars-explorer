import { Fragment } from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import ListPlanets from "../../Components/Planets-List/planets-list.component";

const Planets = () => {
    return (
        <Fragment>
            <Navbar displayText="Planets" />
            <ListPlanets />
        </Fragment>
    );  
};

export default Planets;