import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItemText, ListItem } from '@mui/material';

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


export default function RecentCamp() {
    return (
        <>
            <Box sx={{
                backgroundColor: "#242628",
                border: "1px solid",
                borderRadius: "1rem"
            }}>
                <List component="nav" aria-label="mailbox folders" sx={{
                    color: "white",
                    
                }}>
                    <Typography variant="h6" gutterBottom >Recent Campaigns</Typography>
                    <ListItem button>
                        <Box>

                            <Typography gutterBottom>Camp Id: 114638</Typography>
                            <Typography gutterBottom>Hello XXXX, You are invited to Host The SarvWave...</Typography>
                        </Box>
                    </ListItem>
                    <Divider  />
                    <ListItem button >
                        <Box>

                            <Typography gutterBottom>Camp Id: 114638</Typography>
                            <Typography gutterBottom>Hello XXXX, You are invited to Host The SarvWave...</Typography>
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Box>

                            <Typography gutterBottom>Camp Id: 114638</Typography>
                            <Typography gutterBottom>Hello XXXX, You are invited to Host The SarvWave...</Typography>
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Box>

                            <Typography gutterBottom>Camp Id: 114638</Typography>
                            <Typography gutterBottom>Hello XXXX, You are invited to Host The SarvWave...</Typography>
                        </Box>
                    </ListItem>
                </List></Box>
        </>
    )
}
