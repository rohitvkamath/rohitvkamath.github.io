import { Container } from "@mui/material";
import Head from 'next/head';
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from '../styles/Layout.module.css';


export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <meta name="description" content="Curated Articles" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container maxWidth="lg">
                <Navbar />
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </Container>
        </React.Fragment>

    )
}