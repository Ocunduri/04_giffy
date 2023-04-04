import React from "react";
import { Link } from "wouter"
import './Gif.css'


export default function Gif({ title, id, url }) {
    const IMG_NAME = `Image of ${title}`
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`}>
                <h4>{title}</h4>
                <img src={url} alt={IMG_NAME}/>
            </Link>
        </div>

    )
}