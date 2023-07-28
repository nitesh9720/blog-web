import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItemText, ListItem } from '@mui/material';
import MessagePieChart from './MessagePieChart';
import MessageTable from './MessageTable';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const style = {
    width: '100%',
    maxWidth: 360,
};


export default function MessageCamp() {
    return (
        <>
            <Box sx={{
                backgroundColor: "#242628",
                border: "1px solid",
                borderRadius: "1rem",
                
            }}>
                
                    <Typography variant="h6" gutterBottom sx={{
                        color:"white",
                        m:"10px"
                    }}>Message Types</Typography>

          <Box><MessagePieChart/></Box>
          <Box sx={{
            mt:"10px"
          }}><MessageTable/></Box>
                </Box>
        </>
    )
}
