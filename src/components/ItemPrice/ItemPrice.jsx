import React from 'react';

export default function ItemPrice({ priceList }) {
    return (
        <div className="row py-5">
            {priceList.map((item) => (
                <div className="col-md-4 mb-3 mb-md-3 " key={item.id}>
                    <div className="card pb-4 px-3">
                        <div className="card-head text-center">
                            <h5 className="card-title">{item.type}</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-end">
                                <span className="fw-bold secondary-color h-2 ">
                                    $
                                </span>
                                <h2 className="secondary-color card-body__price mb-2 mx-2">
                                    {item.price}
                                </h2>
                            </div>
                            <p className="card-text text-black-75 mt-3">
                                {item.title}
                            </p>
                            <ul className="list-group list-group-flush border-top py-2 mt-3">
                                {item.points.map((point) => (
                                    <li key={point.point} className="py-2">
                                        <i
                                            className={
                                                point.isAvailable
                                                    ? 'fa fa-check text-success fw-bold'
                                                    : 'fa fa-check text-black-50 fw-bold'
                                            }
                                            aria-hidden="true"
                                        ></i>
                                        <span className="mx-2">
                                            {point.point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-main w-100">
                                Purchase now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
