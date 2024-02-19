import * as React from 'react';
import './form.css'
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';


import { useState } from "react"
export default function Form() {
    const [input, setInput] = useState("");
    const updateInput = (evt) => {
        setInput(evt.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Dynamically construct the Google search URL
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
        // Open the Google search URL in a new tab
        window.open(searchUrl, "_blank");
        // Clear the input field
        setInput("");
    }
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '35%',
                borderRadius: 10,
                position:'static',
                height: 45,
                marginBottom: 0,
                alignContent: 'center',
                //justifyContent: 'around',
                padding: '0 16px',
                '@media screen and (max-width:1000px)':{
                    width:'45%',
                },
                '@media screen and (max-width:650px)':{
                    width:'65%',
                }
            }}
        >
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', width: '70%',marginLeft:'39px' }}>
                <SearchIcon sx={{ 
                        fontSize: 20,
                        verticalAlign: 'middle',
                        marginLeft: -5,
                        color: 'gray',
                        '@media screen and (max-width:580px)':{
                            fontSize:'14px',
                        }
                    }} />
                <InputBase
                    onChange={updateInput}
                    type="text"
                    value={input}
                    sx={{
                        '& input::placeholder': {
                            textAlign: 'left',
                        },
                        width:'130%',
                        height: 45,
                        marginLeft: 1,
                        paddingLeft: 0,
                        '@media screen and (max-width: 768px)': {
                            '& input::placeholder': {
                                fontSize: '14px',
                            },
                        },
                        '@media screen and (max-width: 580px)': {
                            '& input::placeholder': {
                                fontSize: '12px',
                            },
                        },
                    }}
                    placeholder="Search Google or type a URL"
                    inputProps={{ 'aria-label': 'search Google or type a URL' }}
                />

            </form>
            <div style={{ display: 'flex', justifyContent:'end',width:'20%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="google-voice-search" width="24" height="25">
                    <g data-name="Layer 2">
                        <g data-name="Layer 3">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="#fff" d="M1 12C1 4 4 1 12 1s11 3 11 11-3 11-11 11S1 20 1 12"></path>
                            <path fill="#4285f4" d="M12 14.52A2.54 2.54 0 0 0 14.57 12V6.12a2.58 2.58 0 0 0-5.15 0V12A2.55 2.55 0 0 0 12 14.52Z"></path>
                            <path fill="#34a853" d="M11.15 17.81h1.71v2.59h-1.71Z"></path>
                            <path fill="#f4b400" d="M7.72 12H6a5.81 5.81 0 0 0 1.76 4.16L9 15a4.16 4.16 0 0 1-1.28-3Z"></path>
                            <path fill="#ea4335" d="M12 16.2A4.33 4.33 0 0 1 9 15l-1.24 1.15A6 6 0 0 0 12 17.88 5.93 5.93 0 0 0 18 12h-1.72A4.24 4.24 0 0 1 12 16.2Z"></path>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" style={{ enableBackground: 'new 0 0 150 150', width: '30px', height: '25',marginLeft:'10px'}}>
                    <g>
                        <path fill="#FBC02D" d="M94.3,43.6c6.6,0,12.1,5.4,12.1,12.1v9.7h12.1v-9.7c0-13.3-10.8-24.2-24.2-24.2h-9.7v12.1H94.3z" />
                        <path fill="#E53935" d="M43.6,55.7c0-6.6,5.4-12.1,12.1-12.1h9.7V31.5h-9.7c-13.3,0-24.2,10.8-24.2,24.2v9.7h12.1V55.7z" />
                        <path fill="#1565C0" d="M55.7,106.4c-6.6,0-12.1-5.4-12.1-12.1v-9.7H31.5v9.7c0,13.3,10.8,24.2,24.2,24.2h9.7v-12.1L55.7,106.4L55.7,106.4z" />
                        <circle fill="#1E88E5" cx="75" cy="75" r="16.9" />
                        <circle fill="#4CAF50" cx="104" cy="104" r="9.7" />
                    </g>
                </svg>
            </div>
        </Paper>
    )
}
