import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Successful from './../../components/Successful/Successful';
import Detalis from './../../components/CuoresSection/Detalis';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import useAxios from '../../api/axios';
import LoadingDetalis from './../../components/LoadingSkeleton/LoadingDetalis';

export default function CourseDetail() {
    ScrollToTop();
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [coures, setCoures] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    const { response, loading, error } = useAxios({
        method: 'get',
        url: `/coures/${id}`,
    });

    useEffect(() => {
        if (response !== null) {
            setCoures(response);
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
                <title>Course</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <div>
                {errorData ? (
                    <div className="alert alert-danger">
                        {errorData.message}
                    </div>
                ) : loadingData ? (
                    coures.map((item) => {
                        return <LoadingDetalis key={item.id} />;
                    })
                ) : (
                    <>
                        <Detalis coures={coures} />
                        <Successful />
                    </>
                )}
            </div>
        </>
    );
}
