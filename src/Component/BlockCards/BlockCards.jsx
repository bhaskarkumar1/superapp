// import React,{useState} from "react"

import styles from "./BlockCards.module.css"
const BlockCards=({handleClick,color,name, src})=>{


    return(
        <>
        
        <div onClick={()=>handleClick(name)} className={styles.container} style={{backgroundColor:color}}>
            <div className={styles.name}>  <h1>{name}</h1></div>
          
            <div className={styles.image}><img src={`src/assets/genreImage/${src}.png`} alt="movies" /></div>
        </div>
     
        </>



    )
}

export default BlockCards