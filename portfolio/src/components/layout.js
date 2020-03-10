import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Banner from './banner';
import Section from './section';

const useStyles = makeStyles({
    root: {
        height: '100vh',
    }
});

const Layout= () => {
    const classes = useStyles();
      return (
          <div className={classes.root}>
              <Banner />
              <Section
              title={"Web Design"} />
               <Section
              title={"Art Gallery"} />
               <Section
              title={"Video and Film"} />
          </div>
      )
    }
export default Layout;