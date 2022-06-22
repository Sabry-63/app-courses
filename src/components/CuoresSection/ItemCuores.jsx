import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCuores({ items }) {
    return (
        <div className="row">
            {items.map((item) => {
                return (
                    <div className="col-md-4 mb-4 " key={item.id}>
                        <Link
                            to={`/Courses/${item.id}`}
                            className="item-cuorses "
                            replace
                        >
                            <div className="shadow rounded-3">
                                <img
                                    src={`/content/assets/cuoreses/${item.img}`}
                                    alt={item.title}
                                    className="w-100"
                                />
                                <div className="item-cuorses__info ">
                                    <img
                                        src={`/content/assets/cuoreses/${item.subImg}`}
                                        alt={item.id}
                                        className="item-cuorses__info__img"
                                    />
                                    <h4 className="item-cuorses__info__title">
                                        Lorem ipsum dolor sit amet. {item.id}
                                    </h4>
                                    <span className="item-cuorses__info__sub-title">
                                        Lorem, ipsum dolor. {item.id}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
