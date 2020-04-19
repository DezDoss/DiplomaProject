import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './AppHeader.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
    
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <h6>
        <Link to="/" className="app-title">C++ тілі</Link>
        </h6>
          <div className="container">
                    <div className="app-options">
                        <nav className="app-nav">
                                { props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/newlesson"></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/course">Курс</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/videocourse">Видео Курс</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/profile">Жеке бет</NavLink>
                                        </li>
                                        <li><NavLink to="/">
                                            <a onClick={props.onLogout}>Шығу</a>
                                            </NavLink>
                                            
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                         <li>
                                            <NavLink to="/newlesson"></NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/login">Кіру</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Тіркелу</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
