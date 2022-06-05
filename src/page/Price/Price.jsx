import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ItemPrice from '../../components/ItemPrice/ItemPrice';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';
import useAxios from './../../api/axios';
import LoadingPrice from '../../components/LoadingSkeleton/LoadingPrice';

export default function Price() {
    ScrollToTop();
    const [priceList, setPriceList] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/priceList',
    });

    useEffect(() => {
        if (response !== null) {
            setPriceList(response);
            setLoadingData(loading);
        } else if (error !== null) {
            setErrorData(error);
            setLoadingData(loading);
        }
    }, [response, error, loading]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Price</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <main className="py-5 page-pirce">
                <div className="container">
                    <div className="page-pirce__header">
                        <span className="main-color fw-bold">Our plans</span>
                        <h2 className="fw-bold mt-2 mb-4">
                            Get in Reasonable price
                        </h2>
                    </div>
                    <div className="page-pirce__content">
                        {errorData ? (
                            <div className="alert alert-danger">
                                {errorData.message}
                            </div>
                        ) : loadingData ? (
                            <LoadingPrice />
                        ) : (
                            <ItemPrice priceList={priceList} />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
