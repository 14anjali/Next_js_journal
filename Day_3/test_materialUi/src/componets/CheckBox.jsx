import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import EditIcon from '@mui/icons-material/Edit'

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CheckBox() {
  return (
    <>
      <Checkbox  defaultChecked />
      {/* <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked /> */}
       {/* <Checkbox
        {...label}
        sx={{
          color: "green",
          "&.Mui-checked": {
            color: "green",
          },
        }} 
      /> */}
      <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />     
    <FormControlLabel required control={<Checkbox defaultChecked />} label="Required" />      </FormGroup>

  <Fab color="primary" aria-label="add"> <AddIcon /></Fab>
  <Fab aria-label="edtit"
  sx={{
    backgroundColor:"purple",
    color:'white'
  }}
  ><EditIcon/></Fab>
    </>
  );
}

export default CheckBox;
