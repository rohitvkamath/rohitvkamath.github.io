import { Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';


export default function HomePage() {

  return (
    <React.Fragment>
      <Head>
        <title>My Space</title>
        <meta property="og:title" content="My Space" key="title" />
      </Head>

      <Grid container sx={{ margin: 2 }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Typography variant='h4'>Under construction</Typography>
        </Grid>
      </Grid>

    </React.Fragment>
  )

}
