import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TinyLineChart from './TinyLineChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ChartBox() {
  return (
    <Box sx={{ flexGrow: 1 ,border:"1px solid", backgroundColor:"#242628",borderRadius:"1rem"}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            color:"#F0F0F0"
          }}>
            <Typography sx={{m:"1rem",color:"gray"}}>Otp</Typography>
            <Typography  sx={{ml:"1rem",fontSize:"2rem"}}>13264</Typography>
            <Typography  sx={{m:"1rem",fontSize:"14px",color:"gray"}}><AccessTimeIcon/> 10 Jul 2023</Typography>

          </Box>
        </Grid>
        <Grid item xs={6}>
        

        </Grid>
       
      </Grid>
    </Box>
  );
}
