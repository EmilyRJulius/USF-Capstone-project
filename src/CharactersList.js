import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CharactersList(){
    const { curr_user } = useParams()
    const [characters, setCharacters] = useState([])

    async function getCharacters(){
        const response = await axios.get(`http://localhost5000/${curr_user}/characters`);
        setCharacters(response);
        console.log(response)
    }
    console.log(getCharacters)
    console.log(characters)

    return(
        <div>
            <ul>
                <h1>Character Sheets</h1>
                {characters.map((character) => (
                    <p>{character.name}</p>
                ))}
            </ul>
        </div>
    )
}
export default CharactersList;