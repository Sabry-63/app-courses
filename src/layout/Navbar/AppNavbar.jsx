import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLangAr, setLangEn } from '../../redux/lang/langSlice';
import { Menu, Dropdown } from 'antd';
import UpperNavbar from './UpperNavbar';

export default function AppNavbar() {
    const dispatch = useDispatch();
    const { lang } = useSelector((state) => state.lang);

    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    }, [lang]);

    const menu = (
        <Menu
            items={[
                {
                    label: (
                        <Link
                            to={`/`}
                            onClick={() => dispatch(setLangEn('en'))}
                        >
                            English
                        </Link>
                    ),
                },
                {
                    label: (
                        <Link
                            to={`/ar`}
                            onClick={() => dispatch(setLangAr('ar'))}
                        >
                            Arabic
                        </Link>
                    ),
                },
            ]}
        />
    );

    return (
        <>
            <UpperNavbar />
            <Navbar className="py-3 main-navbar" expand="lg">
                <Container className="justify-content-bettwen align-items-center">
                    <Navbar.Brand>
                        <img
                            src="/content/assets/logos/logo-dark.png"
                            alt="logo-dark"
                            width={220}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className={`${
                                lang === 'en' ? 'ms-auto' : 'me-auto'
                            }`}
                        >
                            <Link
                                to={lang === 'en' ? '/' : `/${lang}/`}
                                className="nav-link"
                            >
                                Home
                            </Link>
                            <Link
                                to={lang === 'en' ? '/Price' : `/${lang}/Price`}
                                className="nav-link"
                            >
                                Price
                            </Link>
                            <Link
                                to={
                                    lang === 'en'
                                        ? '/Courses'
                                        : `/${lang}/Courses`
                                }
                                className="nav-link"
                            >
                                Courses
                            </Link>
                            <Link
                                to={
                                    lang === 'en'
                                        ? '/Contact'
                                        : `/${lang}/Contact`
                                }
                                className="nav-link"
                            >
                                Contact
                            </Link>

                            {/* <Link to={'#'} className="nav-link">
                                <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                ></i>
                            </Link> */}

                            <Dropdown overlay={menu} placement="bottom" arrow>
                                <span className="text-uppercase nav-link">
                                    <i
                                        className="fa fa-globe mx-1"
                                        aria-hidden="true"
                                    ></i>
                                    {lang}
                                </span>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
