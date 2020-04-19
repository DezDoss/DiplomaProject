import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Prism from 'prismjs';
import './prism.css';



const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(0),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  }));



  function saveLesson(lesson)  {   
const axios = require('axios');

async function makePostRequest() {



  let res = await axios.post('http://localhost:8080/lesson/save',{
    title: lesson.title,
    text: lesson.text,
    example_desc: lesson.example_desc,
    codeSample:  lesson.codeSample
  }).then(response => { 
    console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });

  
}
console.log(lesson);
makePostRequest();
};


function AddTable() {

  useEffect(() => {
    Prism.highlightAll();
  }) 
  
    const classes = useStyles();

      const initialFormState = { id: null, 
        id: '',
        title: '',
        text: '',
        example_desc: '',
        codeSample:''}

	const [ lesson, setLesson ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
		setLesson({ ...lesson, [name]: value })
	}

       
return(
     <React.Fragment>
    <CssBaseline />
    <Container fluid style = {{height: 600}}>
    
    <pre>
  <code className="language-cpp">
{`f,ldpf
fds'f
flds'f
f,dls'f`}
  </code>
</pre>


       <TextField
          label="Title"
          name="title"
          margin="dense"
          variant="outlined"
          value={lesson.title} 
          onChange={handleInputChange}
          style = {{marginTop: 30,width: 900}}
        />
          <TextField
          label="Text 1"
          name="text"
          multiline
          rows= "12"
          margin="dense"
          variant="outlined"
          value={lesson.text} 
          onChange={handleInputChange}
          style = {{marginTop: 30, width: 900}}
        />
        <TextField
        label="Code description"
        name="example_desc"
        multiline
        rows= "4"
        margin="dense"
        variant="outlined"
        value="C++ тіліндегі мысал код:" 
        onChange={handleInputChange}
        style = {{marginTop: 30, width: 900}}
      />
         <TextField
          label="Code Sample"
          name="codeSample"
          multiline
          rows= "4"
          margin="dense"
          variant="outlined"
          value={lesson.codeSample} 
          onChange={handleInputChange}
          style = {{marginTop: 30, marginBottom: 500, width: 900}}
        />     
                   {(!lesson.title || !lesson.text || !lesson.example_desc || !lesson.codeSample) ? 
                   (console.log()) : (
                    <Button variant="contained" color="primary" className={classes.button} 
        
                    onClick={event => {
                    event.preventDefault()
                    saveLesson(lesson)
                    setLesson(initialFormState)
                   }
                  }
                  style = {{marginTop: 30, height: 92}}>Сақтау
                  </Button>)}
                  </Container>
    </React.Fragment>
)
}

export default AddTable;
