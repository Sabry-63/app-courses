import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';

export default function UpperFooter() {
    const [subscrible, setSubscrible] = useState('');

    const submitHeadler = () => {
        console.log(subscrible);
    };

    return (
        <div className="upper-footer py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 mb-4 mb-md-0 text-center">
                        <img
                            src="/content/assets/footer/upper-footer.png"
                            alt="subscribe"
                        />
                    </div>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <span className="main-color upper-footer__sub-title fw-bold">
                            Subscrible now
                        </span>
                        <h2 className="upper-footer__title my-3">
                            Get every single update you will get
                        </h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                submitHeadler();
                            }}
                            className="d-flex border py-2 px-3 align-items-center text-black-50"
                        >
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                            ></i>
                            <Input
                                type={'email'}
                                placeholder="Enter email address"
                                inputMode="email"
                                value={subscrible}
                                onInput={(e) => setSubscrible(e.target.value)}
                                className="border-0"
                            />
                            <button
                                className="btn btn-main"
                                type="submit"
                                disabled={subscrible === '' ? true : false}
                            >
                                Subscrible now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
