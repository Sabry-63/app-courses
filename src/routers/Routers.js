import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from '../page/Home/Home';
import Contact from './../page/Contact/Contact';
import Courses from './../page/Courses/Courses';
import CourseDetail from './../page/CourseDetail/CourseDetail';
import Price from './../page/Price/Price';

export default function Routers() {
    return (
        <Routes>
            {['/', '/en/', '/ar/'].map((path) => (
                <Route
                    key="Home" // optional: avoid full re-renders on route changes
                    path={path}
                    element={<Home />}
                />
            ))}
            {['/Price', '/en/Price', '/ar/Price'].map((path) => (
                <Route
                    key="Price" // optional: avoid full re-renders on route changes
                    path={path}
                    element={<Price />}
                />
            ))}
            {['/Contact', '/en/Contact', '/ar/Contact'].map((path) => (
                <Route
                    key="Contact" // optional: avoid full re-renders on route changes
                    path={path}
                    element={<Contact />}
                />
            ))}
            {['/Courses', '/en/Courses', '/ar/Courses'].map((path) => (
                <Route
                    key="Courses" // optional: avoid full re-renders on route changes
                    path={path}
                    element={<Courses />}
                />
            ))}
            {['/Courses/:id', '/en/Courses/:id', '/ar/Courses/:id'].map(
                (path) => (
                    <Route
                        key="CourseDetail" // optional: avoid full re-renders on route changes
                        path={path}
                        element={<CourseDetail />}
                    />
                )
            )}
        </Routes>
    );
}
