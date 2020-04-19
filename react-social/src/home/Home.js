import React, { Component } from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Jumbotron from '../MainPage/Jumbotron';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Parallax from '../MainPage/Parallax';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Gallary from '../MainPage/Gallary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CodeIcon from '@material-ui/icons/Code';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Main from './Main';

const styles = {
    textField: {
    fontSize: 50, //works!
 }
}

function Home(props) {
        return (
           <Main />
        )
    }

export default Home;

