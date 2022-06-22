import React, { useEffect, useState } from 'react';
import FliterCoures from '../../components/CuoresSection/FliterCoures';
import ItemCuores from './../../components/CuoresSection/ItemCuores';
import { Helmet } from 'react-helmet-async';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';
import LoadingCourse from './../../components/LoadingSkeleton/LoadingCourse';
import { Pagination } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Courses() {
    ScrollToTop();
    const [coures, setCoures] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(null);
    const { lang } = useSelector((state) => state.lang);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        setLoadingData(true);
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
                setLoadingData(false);
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
                <div className="courese-page__header pt-5"></div>
                <div className="container">
                    <div className="courese-page__content">
                        <div className="row">
                            <div className="col-md-3 mb-3 mb-md-0">
                                <div className="shadow p-4  bg-white rounded-3">
                                    <h5 className="border-bottom mb-3 pb-3">
                                        Course category
                                    </h5>
                                    <FliterCoures
                                        setCoures={setCoures}
                                        setPage={setPage}
                                        page={page}
                                        setTotal={setTotal}
                                        setLoadingData={setLoadingData}
                                    />
                                </div>
                            </div>
                            <div className="col-md-9">
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
                                    responsive={true}
                                    itemRender={(
                                        page,
                                        type,
                                        originalElement
                                    ) => {
                                        if (type === 'prev') {
                                            return (
                                                <span>
                                                    {lang === 'en' ? (
                                                        <i className="fa fa-angle-left    "></i>
                                                    ) : (
                                                        <i className="fa fa-angle-right    "></i>
                                                    )}
                                                </span>
                                            );
                                        }
                                        if (type === 'next') {
                                            return (
                                                <span>
                                                    {lang === 'en' ? (
                                                        <i className="fa fa-angle-right    "></i>
                                                    ) : (
                                                        <i className="fa fa-angle-left    "></i>
                                                    )}
                                                </span>
                                            );
                                        }
                                        return originalElement;
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
