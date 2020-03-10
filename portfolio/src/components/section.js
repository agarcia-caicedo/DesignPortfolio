import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#f9f4a2',
        height: '100vh',
    },
    titleBg: {
        backgroundColor: '#131c3f',
        padding: '1rem',
        position: 'relative',
        top: '2rem',
        left: '0.5rem',
        display: 'inline-block',
        boxShadow: '1rem 1.5rem #f94d2f'
    },
    break: {
        border: "0.5rem solid #131c3f",
        position: 'relative',
        bottom: '-80vh',
        width: '80%',
        boxShadow: '0.75rem 0.5rem #f94d2f'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
});

const Section = (props) => {
const classes = useStyles();

  return (
      <div className={classes.root}>
          <div className={classes.titleBg}>
          <Typography variant="h3" color="primary">{props.title}</Typography>
          </div>

            {props.tileData}

          <hr className={classes.break} />
      </div>
  )
}

export default Section;