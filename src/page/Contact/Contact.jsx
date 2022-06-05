import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';

export default function Contact() {
    ScrollToTop();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <div className="py-5 contact">
                <div className="container">
                    <div className="contact__head m3-5">
                        <h2 className="fw-bold">Contact Us</h2>
                        <p className="text-black-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur nec nisl odio. Mauris vehicula at
                            nunc id tristique.
                        </p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <form>
                                <div className="form-group mb-3">
                                    <input
                                        type={'text'}
                                        placeholder="Enter You`r Name "
                                        class="form-control"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type={'email'}
                                        placeholder="Enter You`r Email "
                                        class="form-control"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type={'text'}
                                        placeholder="Enter You`r subject "
                                        class="form-control"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Enter You`r Message"
                                    ></textarea>
                                </div>
                                <button className="btn btn-main">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 mb-3 mb-md-0 text-center">
                            <img
                                src="content/assets/contactus.png"
                                alt="contact-us"
                                className="w-75"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
