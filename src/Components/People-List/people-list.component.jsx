import { List } from "@mui/material";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { AccountCircle, InfoSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from '../../store/actions';
import BackButtonComponent from "../Back-Button/back-button.component";
import '../lists.styles.css';

const ListPeople = () => {      
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPeople());
    }, [dispatch]);

	  const people = useSelector((state) => state.people);

      return (
          <List className="swe-list" sx={{ width: '100%', maxWidth: 360, bgcolor:'#E7EBF0' }}>
            { people.map((item, index) => {
                return (
                  <ListItem key={ index }>
                    <ListItemAvatar>
                      <Avatar>                                
                        <AccountCircle fontSize="large" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} />
                    <Link to={`/people/${item.name}`}><InfoSharp className="swe-info-icon" /></Link>
                </ListItem>                  
                )
              })
            }              
            <BackButtonComponent />    
          </List>
      );    
}

export default ListPeople;