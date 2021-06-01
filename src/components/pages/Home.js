import React from 'react';
import { Link } from 'react-router-dom';
import {catalog} from '../../utils';

const homeCat = catalog.slice(0,3);

export default function Home() {
    return (
        <>
            {
                homeCat.map(({name, imgSrc}, index) => (
                    <div className="home-cat-item" key={name}>
                        <img alt={name} src={imgSrc} />
                        <span className="home-cat-more">
                            {name}
                            <Link type="button" to={`/catalog/car/${name}/${index}`}>Подробнее</Link>
                        </span>
                    </div>
                ))
            }
        </>
    )
}
