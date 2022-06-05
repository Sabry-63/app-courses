import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import WhatLearen from './WhatLearen';

export default function Detalis({ coures }) {
    return (
        <section className=" course-detail">
            <div className="course-detail__header">
                <div className="container">
                    <span className="main-color fw-bold">Course detail</span>
                    <h2 className="mt-2  fw-bold">
                        User Research for User Experience Design
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className="course-detail__info">
                    <div className="row">
                        <div className="col-md-8 mb-3 mb-md-0 ">
                            <div className="border rounded-3 h-100">
                                <img
                                    src={`/content/assets/cuoreses/${coures.img}`}
                                    alt="cuorese"
                                    className="course-detail__info__img"
                                />
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="course-detail__info__content border rounded-3 p-3">
                                <ul>
                                    <li className="border-bottom py-2 mb-2 ">
                                        <strong>Enrolled : </strong>
                                        <span>1000 students</span>
                                    </li>
                                    <li className="border-bottom py-2 mb-2 ">
                                        <strong>Duration : </strong>
                                        <span> 12 Hours</span>
                                    </li>
                                    <li className="border-bottom py-2 mb-2 ">
                                        <strong>Lectures : </strong>
                                        <span>20</span>
                                    </li>
                                    <li className="border-bottom py-2 mb-2 ">
                                        <strong>Categories : </strong>
                                        <span>Technology</span>
                                    </li>
                                    <li className="border-bottom py-2 mb-2 ">
                                        <strong>Level : </strong>
                                        <span>Beginner Level</span>
                                    </li>
                                    <li className="text-center py-2">
                                        <img
                                            src="/content/assets/cuoreses/coures-d.png"
                                            alt="cuorese"
                                            className="mt-2 mb-4"
                                        />
                                        <p>Contact a customer support at </p>
                                        <Link to="/">vctung@outlook.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8 mb-3 mb-md-0 ">
                            <Description />
                            <WhatLearen />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
