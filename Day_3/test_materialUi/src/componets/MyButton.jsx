import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from "@mui/material/ButtonGroup";

function MyButton() {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        size="large"
        sx={{
          mr: 2,
          px: 3,
        }}
      >
        Text
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "pink",
          fontWeight: 600,
        }}
      >
        Home
      </Button>
        <Button variant="contained" startIcon={<DeleteIcon />} color="error"
        sx={{
            ml:2
        }}
        >Delete</Button>
        
        {/* button group */}
        <ButtonGroup variant="outlined" aria-label="Basic button group" orientation="vertical"
        sx={{
            backgroundColor:'pink',
            "&:hover":{
                backgroundColor:'pink',
            },
            "& .MuiButton-root":{
                color:'white',
                border:'2px solid white'
            }
        }}
        >
            <Button>Home</Button>
               <Button>About</Button>
                  <Button>Contact</Button>
        </ButtonGroup>
        {/* Split button */}

        
    </>
  );
}
export default MyButton;
