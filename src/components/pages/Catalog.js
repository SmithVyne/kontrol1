import React from 'react'
import { Link } from 'react-router-dom';
import {catalog} from '../../utils';


export default function Catalog() {
    return (
        <>
            {
                catalog.map(({name, imgSrc, price}, index) => (
                    <Link to={`/catalog/car/${name}/${index}`} className="cat-item">
                        <div className="cat-item-desc">
                            <span className="cat-item-name">{name}</span>
                            {price}
                        </div>
                        <img alt={name} src={imgSrc} />
                    </Link>
                ))
            }
        </>
    )
}
