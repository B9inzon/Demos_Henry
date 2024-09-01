import { useEffect, useState } from "react";
import styles from "./Detail.module.css"

export const Detail  = ({id, handleOnClose })=>{
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then((response)=>response.json())
        .then((data)=> setCharacter(data[0]))
    }, []);



    return(
        <div className={styles.modalDetail}>
            <h2>{character?.name}</h2>
            <img src={character?.image} alt={character?.name} />
            <button className={styles.buttonDetail} onClick={handleOnClose}>Cerrar</button>
        </div>
    )
}