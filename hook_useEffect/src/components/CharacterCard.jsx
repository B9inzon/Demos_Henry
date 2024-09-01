import styles from "./Detail.module.css"


export const CharacterCard = ({ character, handleOnClick })=>{
    const { name, house, id}= character;

    return(
            <div>
                <div className={styles.cardContainer}>
                    <h2>{name}</h2>
                    <h3> {house} </h3>
                    <button onClick={()=>handleOnClick(id)}>Ver detalle</button>
                </div>
            </div>
    )
} 