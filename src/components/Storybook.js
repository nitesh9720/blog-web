import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import Navvar from "./Navvar";
import DashBoardBody from "./DashBoardBody";
import ShowBox from "./ShowBox";
const Storybook=()=>{
    return(
        <>
        <Box sx={{
            backgroundColor:"black"
        }}>
       <Navvar/>
       
       <AppBar position="static" sx={{ 
        mt:"10px" ,backgroundColor:"#F5C10A" , borderRadius:"10px" ,ml:"12px"    }}>
           
       <Typography sx={{
        p:"1rem",
        color:"black"
       }}>To send sms DLT registration is compulsory and all the sender ids need to be approved under DLT to send sms communication.</Typography>
       
       </AppBar>
       <span>
        <GridViewIcon/> <Typography>Dashboard</Typography>
       </span>
    <DashBoardBody/>
<ShowBox/></Box>
        </>
    )
}
export default Storybook;