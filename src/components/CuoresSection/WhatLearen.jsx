import React from 'react';

export default function WhatLearen() {
    return (
        <div className="mb-5">
            <h2 className="fw-bold">What You’ll Learn?</h2>
            <ul>
                {[0, 1, 2, 3, 4].map((item, index) => {
                    return (
                        <li className="d-flex my-3" key={index}>
                            <i
                                className="fa fa-check mt-2 fw-bold text-success"
                                aria-hidden="true"
                            ></i>
                            <p className="mx-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Iure nihil dicta blanditiis
                                pariatur ipsum dolores fugiat ipsa eligendi
                                temporibus, quam quo sapiente sed labore hic
                                nulla ad numquam ducimus cum.
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
