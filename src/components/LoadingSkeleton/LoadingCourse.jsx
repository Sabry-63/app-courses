import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function LoadingCourse() {
    return (
        <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <div className="col-md-4  mb-4" key={index}>
                    <SkeletonTheme baseColor="#ccc" highlightColor="#ddd">
                        <Skeleton
                            height={220}
                            width="100%"
                            animate={true}
                            duration={2}
                        />
                        <Skeleton
                            count={2}
                            height={40}
                            width="80%"
                            animate={true}
                            duration={2}
                        />
                    </SkeletonTheme>
                </div>
            ))}
        </div>
    );
}
