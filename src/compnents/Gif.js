import React from "react";
import './Gif.css'
export default function Gif({ title, id, url }) {
    const IMG_NAME = `Image of ${title}`
    return (
        <a href={`#${id}`} className="Gif" alt={IMG_NAME} >
            <h4>{title}</h4>
            <img src={url} />
        </a>
    )
}