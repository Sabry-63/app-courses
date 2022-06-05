import React, { useEffect, useState } from 'react';
import FliterCoures from '../../components/CuoresSection/FliterCoures';
import ItemCuores from './../../components/CuoresSection/ItemCuores';
import { Helmet } from 'react-helmet-async';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';
import LoadingCourse from './../../components/LoadingSkeleton/LoadingCourse';
import { Pagination } from 'antd';
import axios from 'axios';

export default function Courses() {
    ScrollToTop();
    const [coures, setCoures] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        axios
            .get('/coures', {
                params: {
                    _page: page,
                    _limit: 9,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            })
            .then((res) => {
                setCoures(res.data);
                setLoadingData(false);
                setTotal(res.headers['x-total-count']);
            })
            .catch((err) => {
                setErrorData(err);
                setLoadingData(true);
            });
    }, [page]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Courses</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <section className="courese-page ">
                <div className="courese-page__header pt-5">
                    <div className="container">
                        <span className="main-color fw-bold">
                            Course category
                        </span>
                        <h2 className="mt-3">Web Development</h2>
                        <div className="courese-page__header__fillter my-5">
                            <FliterCoures />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="courese-page__content">
                        {errorData ? (
                            <div className="alert alert-danger">
                                {errorData.message}
                            </div>
                        ) : loadingData ? (
                            <LoadingCourse />
                        ) : (
                            <>
                                <ItemCuores items={coures} />
                            </>
                        )}
                        <Pagination
                            defaultCurrent={page}
                            total={total}
                            onChange={(page) => setPage(page)}
                            current={page}
                            pageSize={9}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
