import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import './navbar.styles.css'

type NavBarProps = {
    displayText: string;
}

const Navbar = ({displayText}:NavBarProps) => {        
    return (           
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">          
                <Toolbar className='swe-toolbar'>
                    <Link to='/menu'>
                        <IconButton
                            edge="start"
                            sx={{ mr: 4 }}                            
                            aria-label="menu"              
                            size="large"
                            className="swe-menu-icon"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Typography id='swe-toolbar-title' variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        {displayText}
                    </Typography>    
                    <Link to='/'><HomeIcon className="swe-home-icon" fontSize='large' /></Link>                
                </Toolbar>        
            </AppBar>        
        </Box>
    );    
}

export default Navbar;
