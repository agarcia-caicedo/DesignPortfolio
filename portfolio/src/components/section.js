import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f9f4a2',
        height: '100vh',
    }
});

const Section = () => {
const classes = useStyles();

  return (
      <div className={classes.root}>

      </div>
  )
}

export default Section;