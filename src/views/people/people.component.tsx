import { Fragment } from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import ListPeople from "../../Components/People-List/people-list.component";

const People = () => {    
    return (
        <Fragment>
            <Navbar displayText="People" />
            <ListPeople />
        </Fragment>
    );  
};

export default People;