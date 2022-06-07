import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const BackButtonComponent = () => {        
    const navigate = useNavigate();
    return (           
            <Button className="swe-back-button" onClick={() => navigate(-1)} variant="outlined" size="large">
                back
            </Button> 
    );    
}

export default BackButtonComponent;