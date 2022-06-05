import React from 'react';

export default function Successful() {
    return (
        <section className="section-successful py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="section-successful__info">
                            <img
                                src="/content/assets/successful/img.png"
                                alt="successful"
                                className="w-100"
                            />
                            <img
                                src="/content/assets/successful/icon.png"
                                alt="successful"
                                className="section-successful__info__icon"
                            />
                            <div className="section-successful__info__box text-center">
                                <h3>Kimmie Vo</h3>
                                <span>Junior Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                        <div className="section-successful__text">
                            <h2>
                                Successful Student{' '}
                                <span className="main-color">Feedback</span>
                            </h2>
                            <p>
                                Take courses from the world’s best instructors
                                and universities. Courses include recorded
                                auto-graded and peer-reviewed assignments, video
                                lectures, and community discussion forums. When
                                you complete a course, you’ll be eligible to
                                receive a shareable electronic Course
                                Certificate for a small fee.
                            </p>
                        </div>
                        <h5 className="mt-5 mb-3">
                            The courses that Kimmie has taken
                        </h5>
                        <div className="section-successful__box d-flex align-items-center">
                            <img
                                src="/content/assets/successful/UX_design_principles_jpg_-EtzLc2m.png"
                                alt=""
                                className=""
                            />
                            <div className="mx-3">
                                <h5>Modern and Contemporary Art and Design</h5>
                                <span>The Museum of Modern Art</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
