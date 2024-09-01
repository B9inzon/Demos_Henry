/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { CharacterCard } from "../components/CharacterCard";
import { Detail } from "../components/Detail";

export const Characters = ()=>{
    const [characters, setCharacters] = useState([]);
    const [detail, setDetail] = useState(false);
    const [id, setId] = useState(0);
    console.log(detail);
    console.log(id);
    

    const handleOnClick = (id)=>{
        setId(id);
        setDetail(true);
    }

    const handleOnClose = ( )=>{
        setDetail(false);
    }

    useEffect(()=>{
        fetch("https://hp-api.onrender.com/api/characters")
        .then((response)=>response.json())
        .then((data)=> setCharacters(data))
    },[]);

    return (
        <>
            {
                characters.map((character) =>{
                    return <CharacterCard key={character.id} character={character} handleOnClick={handleOnClick} />
                })
            }
            {detail && <Detail id={id} handleOnClose={handleOnClose}/>}
        </>
    )
}