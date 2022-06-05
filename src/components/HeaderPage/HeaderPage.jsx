import React from 'react';

export default function HeaderPage() {
    return (
        <div className="header-page pt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="header-page__info">
                            <strong className="header-page__info__sub-title">
                                Become Master
                            </strong>
                            <h1 className="mt-2 mb-4 header-page__info__title">
                                Learn New Skills Online Find Best Courses
                            </h1>
                            <button className="btn btn-main mb-3 mb-md-0">
                                Get A Quote
                            </button>
                            <button className="btn btn-white mx-md-3">
                                Read more
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0 ">
                        <div className="header-page__img">
                            <img
                                src="/content/assets/header/header.png"
                                alt="header"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
