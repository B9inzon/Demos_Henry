import { useState } from "react"

export const Characters = ()=>{
    const [characters, setCharacters] = useState([]);

    return (
        <>
            {
                characters.map(() =>{
                    return <CharacterCard/>
                })
            }
        </>
    )
}