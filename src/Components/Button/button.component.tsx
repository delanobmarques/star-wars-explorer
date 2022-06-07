import Button from "@mui/material/Button";
import './button.styles.css';

type ButtonComponentProps = {
    displayText: string;
}

const ButtonComponent = ({displayText}: ButtonComponentProps) => {        
    return (           
        <div className="btn-swe">            
            <Button className="btn-swe" variant="contained" size="large">
                {displayText}
            </Button>                  
        </div>
    );    
}

export default ButtonComponent;