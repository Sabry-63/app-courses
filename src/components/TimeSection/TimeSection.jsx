import React from 'react';
import Countdown from 'react-countdown';

export default function TimeSection() {
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div className="tiem-section__timer ">
                    <div className="text-white text-center tiem-section__timer__box">
                        <h2> 3 </h2>
                        <span>Days</span>
                    </div>
                    <div className="text-white text-center tiem-section__timer__box">
                        <h2> {hours} </h2>
                        <span>Hours</span>
                    </div>
                    <div className="text-white text-center tiem-section__timer__box">
                        <h2>{minutes} </h2>
                        <span>Minutes</span>
                    </div>
                    <div className="text-white text-center tiem-section__timer__box">
                        <h2>{seconds} </h2>
                        <span>Seconds</span>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="container tiem-section">
            <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-md-0">
                    <div className="tiem-section__info d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <img src="/content/assets/Success.png" alt="Success" />
                        <h2>
                            Upcoming Our
                            <span className="main-color">
                                {' '}
                                Basic in Python{' '}
                            </span>
                            Course!
                        </h2>
                    </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <Countdown date={Date.now() * 90} renderer={renderer} />,
                </div>
            </div>
        </div>
    );
}
