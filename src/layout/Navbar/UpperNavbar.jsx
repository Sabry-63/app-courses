import React from 'react';

export default function UpperNavbar() {
    return (
        <div className="upper-navbar py-2 d-none d-md-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <i
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    className="mx-2 link-address text-decoration-none "
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    1600 Amphitheatre Parkway, CA 94043
                                </a>
                            </div>
                            <div className="col-md-6">
                                <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    className="mx-2 link-address text-decoration-none "
                                    href="mailto:vctung@outlook.com"
                                >
                                    vctung@outlook.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="d-flex list-sochail justify-content-end align-items-center">
                            <li className="list-sochail__item">
                                <a
                                    className="list-sochail__item__link"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                            {/* End Item */}
                            <li className="list-sochail__item">
                                <a
                                    className="list-sochail__item__link"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fa fa-pinterest"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                            {/* End Item */}
                            <li className="list-sochail__item">
                                <a
                                    className="list-sochail__item__link"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fa fa-twitter"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                            {/* End Item */}
                            <li className="list-sochail__item">
                                <a
                                    className="list-sochail__item__link"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </li>
                            {/* End Item */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
