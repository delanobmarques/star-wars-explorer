import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar.component';
import BackButtonComponent from '../Back-Button/back-button.component';

const MovieCard = () => {    
    const movies = useSelector((state) => state.movies);
    const { itemId } = useParams();
    
	const selectedItem = movies.find(
		(p) => p.title === itemId
	);

    return (         
        <>
            <Navbar displayText="Movies" />
            <Card className='swe-content-card' sx={{ width: '100%', maxWidth: 350 }} key={ itemId } elevation={10}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { selectedItem.title }
                    </Typography>
                    <Typography variant="body4" color="text.secondary">
                        <p>Title: { selectedItem.title } </p>
                        <p>Director: { selectedItem.director } </p>
                        <p>Producers: { selectedItem.producer } </p>                            
                    </Typography>
                </CardContent>   
                <BackButtonComponent />             
            </Card>              
        </>
    );    
};

export default MovieCard;