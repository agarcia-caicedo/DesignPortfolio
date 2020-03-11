import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Banner from './banner';
import Section from './section';
import Web from './galleries/webDesign';
import Img from './galleries/images';
import Vid from './galleries/videos';

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
              title={"Web Design"}
              gallery={
                  [
                    <Web />
                  ]
              } />
               <Section
              title={"Art Gallery"}
              gallery={
                [
                  <Img />
                ]
            }/>
            <br/>
               <Section
              title={"Video and Film"}
              gallery={
                [
                  <Vid />
                ]
            }/>
          </div>
      )
    }
export default Layout;