import React from 'react';
import { useParams } from 'react-router';
import {catalog} from '../../utils';

export default function Item() {
    const {index} = useParams();
    console.log(index);
    const {name, model, price, imgSrc} = catalog[index];
    return (
        <>
            <div className="cat-item-desc">
                <span className="cat-item-name">{name}</span>
                <span>{model} модели</span>
                {price}
            </div>
            <a target="_blank" rel="noreferrer" href={imgSrc}><img alt={name} src={imgSrc} /></a>
        </>
    )
}
