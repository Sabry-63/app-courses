import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function CuonterItem({ counters }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <div className="row">
            {counters.map((counter) => {
                return (
                    <div className="col-md-3 mb-4 mb-md-0" key={counter.id}>
                        <div className="cuonter__item text-center">
                            <img
                                src={`content/assets/counter/${counter.img}`}
                                alt={counter.title}
                                className="cuonter__item__img"
                            />

                            <CountUp end={counter.cuont} redraw={true}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor
                                        offset={{ top: -100 }}
                                        active={!viewPortEntered}
                                        onChange={(isVisible) => {
                                            if (isVisible) {
                                                setViewPortEntered(true);
                                            }
                                        }}
                                        delayedCall
                                    >
                                        <h5
                                            ref={countUpRef}
                                            className="my-3 cuonter__item__cuont"
                                        />
                                    </VisibilitySensor>
                                )}
                            </CountUp>

                            <span className="fw-bold cuonter__item__title">
                                {counter.title}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
