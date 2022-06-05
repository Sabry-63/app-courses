import React, { useEffect, useState } from 'react';
import useAxios from '../../api/axios';
import ItemCuores from './ItemCuores';
import LoadingCourse from './../LoadingSkeleton/LoadingCourse';

export default function CuoresSection() {
    const [coures, setCoures] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/coures',
        params: {
            _sort: 'enrolled',
            _order: 'desc',
            _limit: 9,
        },
    });

    useEffect(() => {
        if (response !== null) {
            setCoures(response);
            setLoadingData(loading);
        } else if (error !== null) {
            setErrorData(error);
            setLoadingData(loading);
        }
    }, [response, error]);

    return (
        <section>
            <div className="container">
                <h2 className="text-center mb-4">Top Featured Courses</h2>
                {errorData ? (
                    <div className="alert alert-danger">
                        {errorData.message}
                    </div>
                ) : loadingData ? (
                    <LoadingCourse />
                ) : (
                    <ItemCuores items={coures} />
                )}
            </div>
        </section>
    );
}
