import React from 'react';
import { MuiThemeProvider }from '@material-ui/core/styles';
import Layout from '../components/layout';
import theme from '../theme';

import './index.css';
import 'typeface-roboto';

const IndexPage = () => (
    <MuiThemeProvider theme={theme}>
    <Layout>
    </Layout>
    </MuiThemeProvider>
  )

export default IndexPage