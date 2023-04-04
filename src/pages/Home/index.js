import React from "react";
import {Link} from 'wouter'

export default function Home() {
    return (
        <>
            <h3>Los gifs más populares</h3>

            <nav>
                <Link to='/search/panda'>Gifs de pandas</Link>
                <Link to='/search/ecuador'>Gifs de ecuador</Link>
                <Link to='/search/argentina'>Gifs de argentina</Link>
            </nav>
        </>
    )
}