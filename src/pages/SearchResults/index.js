import React from "react";
import Gif from "../../compnents/Gif";
import ListOfGifts from "../../compnents/ListOfGifts";

export default function SearchResults({ params }) {
    
    const { keyword } = params

    return <div>
        <h1 className="App-tittle color-white">Resultado de la busqueda: {keyword}</h1>
        {
            <ListOfGifts keyword={keyword}/>
        }

    </div>
}