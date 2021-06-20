import React from 'react'
import { FormControlLabel, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from 'react-router';


// To make custom classNames!
const useStyle = makeStyles({
  btn: {
    fontFamily: "poppins",
    "&:hover": {
      backgroundColor: "#6394ba",
    }
  },
  field: {
    display: "block",
    marginTop: "15px",
    marginBottom: "15px",
  },
})

export default function Create() {
  const classes = useStyle();
  const history = useHistory();
  const[title, setTitle] = React.useState("");
  const[details, setDetails] = React.useState("");
  const[titleError, setTitleError] = React.useState(false);
  const[detailsError, setDetailsError] = React.useState(false);
  const [category, setCategory] = React.useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if(title == "") {
      setTitleError(true);
    }

    if(details == "") {
      setDetailsError(true);
    }

    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
        // Note: Id will be automatically added.
      }).then(() => history.push('/'))
    } 

  }

  return (

    <Container>
      <Typography 
      variant="h6"
      color="textSecondary" 
      component="h2"
      gutterBottom

    >
      Create a New Note
    </Typography>

    <form noValidate autoComplete="off" onSubmit={handleSubmit}>

      <TextField 
        className={classes.field}
        variant="outlined" 
        label="Note Title" 
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        error={titleError}
      />
      <TextField 
        className={classes.field}
        variant="outlined" 
        label="Details"
        onChange={(e) => setDetails(e.target.value)}
        multiline
        rows={4}
        fullWidth
        required
        error={detailsError}
        
      />
      
      <FormControl className={classes.field}>

       <FormLabel>Note Category</FormLabel>
       <RadioGroup value={category} 
         onChange={(e) => setCategory(e.target.value)}
       >
         <FormControlLabel value="money" control={<Radio color="primary"/>} label="Money"/>
         <FormControlLabel value="todos" control={<Radio color="primary"/>} label="Todos"/>
         <FormControlLabel value="remainders" control={<Radio color="primary"/>} label="Remainders"/>
         <FormControlLabel value="work" control={<Radio color="primary"/>} label="Work"/>
       </RadioGroup>

      </FormControl>

      <Button 
        className={classes.btn}
        type= "submit"
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRightIcon fontSize="medium"
        />}
      >
        Submit
      </Button>

    </form>

 
    {/* 
    <ButtonGroup 
      color="secondary" 
      variant="contained" 
      disableElevation //To remove the shadow of button
    >
      <Button>One</Button>
      <Button>two</Button>
      <Button>three</Button>
    </ButtonGroup> */}

    </Container>
  )
}
