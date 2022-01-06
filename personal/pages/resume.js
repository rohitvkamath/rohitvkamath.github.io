import { Button, Grid } from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


export default function HomePage() {

  const [numPages, setNumPages] = useState(null);

  return (
    <React.Fragment>
      <Head>
        <title>My Resumé</title>
        <meta property="og:title" content="My Resumé" key="title" />
      </Head>

      <Grid container sx={{ margin: 2 }}>
        <Grid container sx={{ justifyContent: 'flex-end' }}>
          <Button variant='outlined' href="/resume.pdf" rel="noopener noreferrer" target="_blank">Open in new tab</Button>
        </Grid>
        <Grid>
          <Document
            file="/resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map(page => <Page scale={2.0} pageNumber={page} key={page}><p>Page {page} of {numPages}</p></Page>)}
          </Document>
        </Grid>
      </Grid>

    </React.Fragment>
  )

}
