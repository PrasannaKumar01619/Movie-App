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

export default function Home() {
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
