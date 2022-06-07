import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar.component';
import BackButtonComponent from '../Back-Button/back-button.component';

const PlanetCard = () => {    
    const planets = useSelector((state) => state.planets);
    const { itemId } = useParams();
    
	const selectedItem = planets.find(
		(p) => p.name === itemId
	);

    return (         
        <>
            <Navbar displayText="Planets" />
            <Card className='swe-content-card' sx={{ width: '100%', maxWidth: 350 }} key={ itemId } elevation={10}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { selectedItem.name }
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                        <p>Terrain: { selectedItem.terrain } </p>
                        <p>Population: { selectedItem.population } </p>
                    </Typography>
                </CardContent>          
                <BackButtonComponent />      
            </Card>              
        </>
    );    
};

export default PlanetCard;