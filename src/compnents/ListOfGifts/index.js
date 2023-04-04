import React, { useState, useEffect } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";

import './ListOfGifts.css'

export default function ListOfGifts({ keyword }) {
    
    const [loading, setLoading] = useState(false)

    const [gifs, setGift] = useState([]);

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword }).then(element => {
            setGift(element)
            setLoading(false)
        })
    }, [keyword])

    if(loading) return <h4>Loading content...</h4>

    return <div className="ListContainer">
        {
            gifs.map(({ id, title, url }) =>
                <Gif key={id} title={title} id={id} url={url} />
            )
        }

    </div>

}