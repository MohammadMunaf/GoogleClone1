import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { BorderColorOutlined } from '@mui/icons-material';

const onClicked=()=>{
    sx={BorderColor:"none"}
}

export default function Navbar() {
    return (
        <Box sx={{marginBottom:'30px'}}>
            <AppBar position="static" sx={{backgroundColor:'transparent',boxShadow:'none'}}>
                <Toolbar sx={{ justifyContent: 'flex-end'}}>
                    <Button onClick={onClicked} sx={{textTransform:'initial','&:hover': {textDecoration:'underline'}}}color="inherit">Gmail</Button>
                    <Button sx={{textTransform:'initial','&:hover': {textDecoration:'underline'}}}color="inherit">Images</Button>
                    <Button sx={{textTransform:'initial',}}color="inherit"><span className="material-symbols-outlined">experiment</span></Button>
                    <Button sx={{textTransform:'initial'}}color="inherit"><span className="material-symbols-outlined">apps</span></Button>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                        color="inherit"
                        sx={{'&:hover': {backgroundColor:'transparent'}}}
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


// <Button sx={{textTransform:'initial','&:hover': {textDecoration:'underline'}}}color="inherit">Secondary</Button>
