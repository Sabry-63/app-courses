import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UpperFooter from './UpperFooter';

export default function AppFooter() {
    const { lang } = useSelector((state) => state.lang);
    return (
        <>
            <UpperFooter />
            <footer className="footer pt-5">
                <div className="container">
                    <div className="row">
                        {/* About Us */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            <img
                                src="/content/assets/logos/logo-light.png"
                                alt="logo-light"
                            />
                            <div className="footer__contact">
                                <i
                                    className="fa fa-map-marker footer__contact__icon"
                                    aria-hidden="true"
                                ></i>
                                <span className="footer__contact__text">
                                    1500 Treat Ave, Suite 200 San Francisco, CA
                                    94110
                                </span>
                            </div>
                            <div className="footer__contact">
                                <i
                                    className="fa fa-envelope footer__contact__icon"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href="mailto:vctung@outlook.com"
                                    className="footer__contact__text"
                                >
                                    vctung@outlook.com
                                </a>
                            </div>
                            <div className="footer__contact">
                                <i
                                    className="fa fa-phone footer__contact__icon"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href="tel:+ 1-800-800-2299"
                                    className="footer__contact__text"
                                >
                                    1-800-800-2299 (Support)
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row justify-content-end">
                                <div className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="fw-bold footer__title">
                                        Community
                                    </h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span>Learners</span>
                                        </li>
                                        <li>
                                            <span>Partners</span>
                                        </li>
                                        <li>
                                            <span>Developers</span>
                                        </li>
                                        <li>
                                            <span>Beta Testers</span>
                                        </li>
                                        <li>
                                            <span>Translators</span>
                                        </li>
                                        <li>
                                            <span>Blog</span>
                                        </li>
                                        <li>
                                            <span>Tech Blog</span>
                                        </li>
                                        <li>
                                            <span>Teaching Center</span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Our Pages */}
                                <div className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="footer__title fw-bold">
                                        Informations
                                    </h5>
                                    <ul className="list-unstyled">
                                        <li>About</li>
                                        <li>Pricing</li>
                                        <li>Blog</li>
                                        <li>Careers</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="fw-bold footer__title">
                                        More
                                    </h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span>Press</span>
                                        </li>
                                        <li>
                                            <span>Investors</span>
                                        </li>
                                        <li>
                                            <span>Terms</span>
                                        </li>
                                        <li>
                                            <span>Privacy</span>
                                        </li>
                                        <li>
                                            <span>Help</span>
                                        </li>
                                        <li>
                                            <span>Accessibility</span>
                                        </li>
                                        <li>
                                            <span>Articles</span>
                                        </li>
                                        <li>
                                            <span>Directory</span>
                                        </li>
                                        <li>
                                            <span>Affiliates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright ">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <p className="footer__copyright__text">
                                    © 2022 All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 mb-3 mb-md-0">
                                <ul className=" footer__copyright__icons">
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook-f footer__copyright__icon"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-pinterest footer__copyright__icon"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter footer__copyright__icon"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i
                                                className="fa fa-instagram footer__copyright__icon"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
