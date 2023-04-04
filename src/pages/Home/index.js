import React from "react";
import { Link } from 'wouter'

const POPULAR_GIFTS = ['Matrix', 'Ecuador', 'Chile', 'Argentina']

export default function Home() {
    return (
        <div className="App-navbar">
            <h3 className="App-title">Los gifs más populares</h3>
            <nav>
                <ul>
                    {
                        POPULAR_GIFTS.map((popularGif) => (
                            <li key={popularGif}>
                                <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}