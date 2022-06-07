import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar.component';
import BackButtonComponent from '../Back-Button/back-button.component';

const PeopleCard = () => {    
    const people = useSelector((state) => state.people);
    const { itemId } = useParams();
    
	const selectedItem = people.find(
		(p) => p.name === itemId
	);
    
    return (         
        <>
            <Navbar displayText="People" />
            <Card className='swe-content-card' sx={{ width: '100%', maxWidth: 350 }} key={ itemId } elevation={10}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { selectedItem.name }
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                        <p>Height: { `${selectedItem.height} cm` } </p>
                        <p>Mass: { `${selectedItem.mass} Kg` } </p>
                        <p>Hair Color: { selectedItem.hair_color } </p>
                        <p>Skin Color: { selectedItem.skin_color } </p>
                        <p>Gender: { selectedItem.gender } </p>
                        <p>Birth Year: { selectedItem.birth_year } </p>
                    </Typography>
                </CardContent> 
                <BackButtonComponent />               
            </Card>              
        </>
        
            
                       
    );    
};

export default PeopleCard;