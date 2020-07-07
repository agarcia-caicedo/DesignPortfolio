import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MobileBanner from './mobileBanner';
import Banner from './banner';
import Section from './section';
import MobileSection from './mobileSection';

const useStyles = makeStyles({
    root: {
        height: '100vh',
    }
});

const Layout= () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
      return (
          <div className={classes.root}>
            {!matches ? <Banner className="header" /> : <MobileBanner className="mobile-header" />}
            {!matches ? <Section /> : <MobileSection className="mobile-header" />}
          </div>
      )
    }
export default Layout;