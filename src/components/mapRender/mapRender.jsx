import React from "react";
import styles from './mapRender.module.sass';
import mapToText from "../../functions/mapToText";

const MapRender = ({ map, hero, mapSize }) => {
    const { position, visible } = hero;
    
    
    return (
        <div className={styles.main}>
            {mapToText(map, position, visible)}
        </div>
    )
}

export default MapRender;
