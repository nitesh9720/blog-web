import { Box, Grid, Typography } from "@mui/material";
import TinyLineChart from "./TinyLineChart";
import ChartBox from "./ChartBox";

const DashBoardBody=()=>{
    return(
        <>
        <Box sx={{
            mt:"1rem",
            mx:"10px"

        }}>
      <Grid container spacing={2}>
  <Grid item xs={3}>
    <Box><ChartBox/></Box>
  </Grid>
  <Grid item xs={3}>
  <Box><ChartBox/></Box>


  </Grid>
  <Grid item xs={3}>
  <Box><ChartBox/></Box>
  

  </Grid>
  <Grid item xs={3}>
  <Box><ChartBox/></Box>
  

  </Grid>
</Grid></Box>
        </>
    )
}
export default DashBoardBody;