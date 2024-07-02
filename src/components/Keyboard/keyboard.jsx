import React from "react";
import styles from "./keyboard.module.sass"

const Keyboard = ({ heroMove, replay }) => {
    return (
        <div className={styles.keyboard}>
            <div className={styles.firstLetter}>
                <button onClick={() => replay()}>Заного</button>
                <button onClick={() => heroMove('up')}>🔼</button>
                <button>#</button>
            </div>
            <div className={styles.secondLetter}>
                <button onClick={() => heroMove('left')}>◀️</button>
                <button onClick={() => heroMove('down')}>🔽</button>
                <button onClick={() => heroMove('right')}>▶️</button>
            </div>
        </div>
    )
}

export default Keyboard;