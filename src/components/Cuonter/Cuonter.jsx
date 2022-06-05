import React from 'react';
import CuonterItem from './CuonterItem';

export default function Cuonter() {
    const counters = [
        { id: 1, img: '1.png', title: 'COURSES PUBLISHED', cuont: '768' },
        { id: 2, img: '2.png', title: 'EXPERT INSTRUCTORS', cuont: '120' },
        { id: 3, img: '3.png', title: 'HAPPY LEARNERS', cuont: '8300' },
        { id: 4, img: '4.png', title: 'AWARDS ACHIEVED', cuont: '32' },
    ];
    return (
        <section className="cuonter">
            <div className="container">
                <CuonterItem counters={counters} />
            </div>
        </section>
    );
}
