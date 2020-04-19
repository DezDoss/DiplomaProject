import SimpleCard from '../Card/SimpleCard';
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, Typography, Button, Box, TextField } from '@material-ui/core';
import { boxShadow } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import $ from 'jquery';
import Prism from 'prismjs';
import renderHTML from 'react-render-html';
import './prism.css';


const styles = {
  LeftPaper: {
    padding: 20,
    marginTop: 30,
    marginLeft: 50,
    marginBottom: 10,
    height: 600,
    width: 300,
    overflowY: 'auto'
  },
  RightPaper: {
    padding: 20,
    marginTop: 30,
    marginRight: 150,
    marginLeft: 50,
    marginBottom: 10,
    height: 600,
    width: 900,
    overflowY: 'auto'
  }
};


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));


 
 function Course() {

  useEffect(() => {
    Prism.highlightAll();
  }) 

  useEffect(() => {
    getLessons();
    }, []) 
  
    async function getLessons() {
      let res = await axios.get("http://localhost:8080/lesson/get");
      let  data  = res.data;
      setLessons( data );
    };
  

    function handleExerciseSelected(id) {
      setExercise(lessons.find(ex => ex.id === id))
      console.log(exercise.text)
    }

    function htmlDecode(input){
      var e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }


  let exercise1 = {
    id: "",
    title: "",
    text: "",
    example_desc: "",
    codeSample: ""
  };
  const [lessons, setLessons] = useState([]);
  const [exercise, setExercise] = useState(exercise1);
  const classes = useStyles();
  const cleanText = exercise.text.replace(/<\/?[^>]+(>|$)/g, "");
return(
<Grid container>
<Box boxShadow={3} style = {styles.LeftPaper}>
  <Grid item sm>
      <List component="ul">
        { lessons.map(lesson =>
        <ListItem button onClick = { () => handleExerciseSelected(lesson.id)} key = {lesson.id}>
        <ListItemText primary= {lesson.title}/>
        </ListItem>)}
        </List>
    </Grid>
    </Box>
    <Grid item sm>
    <Box boxShadow={3} style = {styles.RightPaper}>
    <Typography variant="h3" gutterBottom align="center">
        {exercise.title}
      </Typography>
    <Typography variant="body1" gutterBottom align="left">
    {renderHTML(exercise.text)}
      </Typography>
      <Typography variant="body1" gutterBottom>
       {exercise.example_desc}
      </Typography>
      
      <form action="https://www.jdoodle.com/api/redirect-to-post/online-compiler-c++17" method="post">    
  <textarea name="initScript" rows="8" cols="80" defaultValue = {exercise.codeSample}></textarea> 
  <Button variant="contained" color="primary" type="submit" style = {{padding: 10, marginLeft: 20, marginBottom: 40}}> Жіберу </Button>
</form>
</Box>
    </Grid>
    </Grid>
  );
}

export default Course;