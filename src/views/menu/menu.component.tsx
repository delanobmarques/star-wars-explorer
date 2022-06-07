import { Fragment } from "react";
import Navbar from "../../Components/Navbar/navbar.component";
import ButtonComponent from "../../Components/Button/button.component";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

const Menu = () => {

    return (
        <Fragment>
            <Navbar displayText="Star Wars Explorer" />
            <Stack spacing={3} direction="column" paddingLeft={3} paddingTop={3}>                
                <Link to="/people">
                    <ButtonComponent displayText="People" />
                </Link>
                <Link to="/movies">
                    <ButtonComponent displayText="Movies" />
                </Link>
                <Link to="/planets">
                    <ButtonComponent displayText="Planets" />
                </Link>
            </Stack>
        </Fragment>
    );
  
};

export default Menu;