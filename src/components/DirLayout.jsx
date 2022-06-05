import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

export default function DirLayout({ children }) {
    const { lang } = useSelector((state) => state.lang);
    return (
        <>
            <main dir={lang === 'en' ? 'lrt' : 'rtl'}>
                <Suspense fallback={<Spinner />}>{children}</Suspense>
            </main>
        </>
    );
}
