import React from "react";
import styles from './mapRender.module.sass';
import renderingMap from "../../functions/renderingMap";

const MapRender = ({ map, hero, mapSize }) => {
    const { position, visible } = hero;

    return (
        <div className={styles.main}>
            {renderingMap(map, position, visible, styles)}
        </div>
    )
}

export default MapRender;
