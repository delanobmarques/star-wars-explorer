import { List } from "@mui/material";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { PublicRounded, InfoRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from '../../store/actions';
import BackButtonComponent from "../Back-Button/back-button.component";
import '../lists.styles.css';

const ListPlanets = () => {      
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPlanets());
    }, [dispatch]);

	  const planets = useSelector((state) => state.planets);

      return (
          <List className="swe-list"  sx={{ width: '100%', maxWidth: 360, bgcolor: '#E7EBF0' }}>
            { planets.map((item, index) => {
                return (
                  <ListItem key={ index }>
                    <ListItemAvatar>
                      <Avatar>                                
                        <PublicRounded fontSize="large" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                    <Link to={`/planets/${item.name}`}><InfoRounded className="swe-info-icon"/></Link>
                </ListItem>                  
                )
              })
            }            
            <BackButtonComponent />      
          </List>
      );    
}

export default ListPlanets;