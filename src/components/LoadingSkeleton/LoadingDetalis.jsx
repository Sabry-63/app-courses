import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function LoadingDetalis() {
    return (
        <SkeletonTheme baseColor="#ccc" highlightColor="#ddd">
            <Skeleton height={50} width="40%" animate={true} duration={2} />
            <Skeleton height={60} width="60%" animate={true} duration={2} />
            <Skeleton height={30} width="100%" animate={true} duration={2} />
            <Skeleton
                count={5}
                height={40}
                width="80%"
                animate={true}
                duration={2}
            />
            <Skeleton height={60} width="70%" animate={true} duration={2} />
        </SkeletonTheme>
    );
}
