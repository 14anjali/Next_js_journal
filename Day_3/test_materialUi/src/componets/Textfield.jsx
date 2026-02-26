import TextField from "@mui/material/TextField"

function Textfield(){
    return(
<>
<TextField id='outlined-basic' label="outlined" varient="outlined"></TextField>
 <TextField id="standard-basic" label="Standard" variant="standard" 
 sx={{
    ml:4,
    color:'black'
 }}
 />
</>
    )
}
export default Textfield