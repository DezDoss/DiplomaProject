import SimpleCard from '../Card/SimpleCard';
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, Typography, Button, Box } from '@material-ui/core';
import { boxShadow } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import video from '../videos/2C++.mp4';
import video1 from '../videos/5C++.mp4';
import video2 from '../videos/4C++.mp4';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';


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


    function handleExerciseSelected(id) {
      setExercise(exercise1.find(ex => ex.id === id))
      console.log(exercise.url)
   
      var request = require('request');

var program = {
    script : "<?php echo \"p456456465hp\";?>",
    language: "php",
    versionIndex: "0",
    clientId: "88b16f83d7f5f2be6f941ff484a0deff",
    clientSecret:"330ca0d7366cb0a40caa87ab533c53a8d3582aed801b6a30aa36d1a5a5a217b"
};
request({
    url: 'https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
  if(response) {
  setResponce(body.output);

  }
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
   
    }
  let exercise1 =
[
  {
      "id":1,
      "name": "Html" ,
      "desc": "Learn HTML For Beginners With Free Book ",
      "url" : video
  },
  {
      "id":2,
      "name": "CSS" ,
      "desc": "Learn CSS For Beginners With Free Book",
      "url" : video2
  },
  {
      "id":3,
      "name": "Javascript" ,
      "desc": "Learn Javascript For Beginners With Free Book",
      "url" : video1
  }
];

  const [exercise, setExercise] = useState(exercise1);
  const [response1, setResponce] = useState();
  const classes = useStyles();

return(
<Grid container>
<Box boxShadow={3} style = {styles.LeftPaper}>
  <Grid item sm>
      <List component="ul">
        { exercise1.map(lesson =>
        <ListItem button onClick = { () => handleExerciseSelected(lesson.id)} key = {lesson.id}>
        <ListItemText primary= {lesson.name}/>
        </ListItem>)}
        </List>
    </Grid>
    </Box>
    <Grid item sm>
    <Box boxShadow={3} style = {styles.RightPaper}>
    <Typography variant="h3" gutterBottom>
        {response1}
      </Typography>
      <Typography variant="body1" gutterBottom>
       {}
      </Typography>
     <Player
      playsInline
      src={exercise.url}
    />
    <form action="https://www.jdoodle.com/api/redirect-to-post/online-compiler-c++17" method="post" style = {{marginTop: 15}}>
  <textarea name="initScript" rows="8" cols="80" defaultValue = {exercise.codeSample} style = {{marginTop: 30}}></textarea>
  <Button variant="contained" color="primary" type="submit" style = {{position: "relative", padding: 20}}> Жіберу </Button>
</form>
</Box>
    </Grid>
    </Grid>
  );
}

export default Course;