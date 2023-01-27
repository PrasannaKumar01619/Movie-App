import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "@fontsource/akaya-telivigala"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Header.css";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import {fetchMoviesAsync} from "../../Features/MovieSlice";


export default function Home() {
    const [searchTerm,setSearchTerm] = React.useState("")
    const dispatch = useDispatch();
    const [radio,setRadio] = React.useState("");
    const [all,setAll] = React.useState(false);
    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearchTerm(e.target.value)
    }

    const handleRadioBoth = (e) => {
        if (all === true){
            setAll(false)
        }else{
            setAll(true)
        }
        
    }
    const handleRadio = (e) => {
        if (e.target.value === radio) {
            setRadio("")
        }else{
            setRadio(e.target.value);
        }
        
        console.log(e.target.value,"ee")
       
    }
    // console.log(radio,"rr")
    // console.log(all,"all")
    const handleClick = (e) => {
        e.preventDefault();
        searchTerm ? dispatch(fetchMoviesAsync(searchTerm)) : alert("Enter a search title")
        
        setSearchTerm("")
    }
    console.log(searchTerm,"searchTerm")
    return (
        <Box sx={{ flexGrow: 1 , marginBottom: 4 }} >
            <AppBar position="static" >
                <Toolbar sx={{ backgroundColor: '#1a242f' }}>
                    {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
                  
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Akaya Telivigala , cursive", fontSize: "30px",color:"bisque" , letterSpacing: "2px",marginLeft:2}} >
                         <Link to="/" className='logo'>
                         Movie App
                         </Link>
                            
                        </Typography>
                        <div>
                        <label htmlFor='movie' >Movies</label>
                        <input type="radio" value='movie' id='movie' onClick={handleRadio} checked={!all && radio === 'movie' } onChange={e => {}}></input>
                        <label htmlFor='show' >Shows</label>
                        <input type="radio" value='show' id='show' onClick={handleRadio} checked={!all && radio === 'show'} onChange={e => {}}></input>
                        <label htmlFor='both' >Both</label>
                        <input type="radio" value='both' id='both' onClick={handleRadioBoth} checked={all === true} onChange={e => {}}></input>
                        </div>
                        

                        <form onSubmit={handleClick}>
                        <input type="text" placeholder="Search" className='search' onChange={handleChange} value={searchTerm}></input>
                        <button type='submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        
                        </button>
                        </form>
                        
                        
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "Akaya Telivigala , cursive", fontSize: "30px" }} className='toolBar'>
                            Movie App
                        </Typography> */}
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                    <AccountCircleIcon fontSize='large'></AccountCircleIcon>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
