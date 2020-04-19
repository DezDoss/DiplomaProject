import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 5,
    padding: `${theme.spacing.unit * 3}px 0`,
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <Box  className={classes.footer} >
      <Box boxShadow={7} className={classes.root} elevation={1} style = {{height: 120}}>
        <Typography variant="h5" component="h3">
          C++ программалау тілі
        </Typography>
        <Typography component="p">
          @2020 Барлық заңдар қорғалған
        </Typography>
        <Typography variant="h6" component="h3" style = {{float: "right"}}> 
          developed by Aisha
        </Typography>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);