const renderingMap = (map, position, visible, styles) => {
    let cloneMap = JSON.parse(JSON.stringify(map));
    // let cloneMap = [...map];

    cloneMap = cloneMap.slice(
        position[0] - visible < (cloneMap.indexOf(position[0]) + 1) ? 0 : position[0] - visible, 
        position[0] + visible + 1);

    return cloneMap.map((y, yI) => {

        y = y.slice(
            position[1] - visible < (y.indexOf(position[1]) + 1) ? 0 : position[1] - visible,
            position[1] + visible + 1);
        
        return (
            <div key={yI} className={styles.YMap}>
                {y.map((x, xI) => {
                    return (
                        <div key={xI} className={styles[x]}></div>
                    )
                })}
            </div>
        )
    });
}

export default renderingMap;