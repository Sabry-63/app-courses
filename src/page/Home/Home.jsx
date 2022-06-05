import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cuonter from '../../components/Cuonter/Cuonter';
import CuoresSection from '../../components/CuoresSection/CuoresSection';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';
import TimeSection from '../../components/TimeSection/TimeSection';
import Successful from './../../components/Successful/Successful';

export default function Home() {
    ScrollToTop();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>

            <main>
                <HeaderPage />
                <TimeSection />
                <CuoresSection />
                <Successful />
                <Cuonter />
            </main>
        </>
    );
}
