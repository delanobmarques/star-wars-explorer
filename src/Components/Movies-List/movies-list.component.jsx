import { List } from "@mui/material";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { TheatersRounded, InfoSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from '../../store/actions';
import '../lists.styles.css';
import BackButtonComponent from "../Back-Button/back-button.component";

const ListMovies = () => {      
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

	  const movies = useSelector((state) => state.movies);

      return (
          <List className="swe-list" sx={{ width: '100%', maxWidth: 360, bgcolor: '#E7EBF0' }}>
            { movies.map((item, index) => {
                return (
                  <ListItem key={ index }>
                    <ListItemAvatar>
                      <Avatar>                                
                        <TheatersRounded fontSize="large" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.title} />
                    <Link to={`/movies/${item.title}`}><InfoSharp className="swe-info-icon" /></Link>
                </ListItem>                  
                )
              })
            }    
            <BackButtonComponent />              
          </List>
      );    
}

export default ListMovies;