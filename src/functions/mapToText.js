const mapToText = (map, position, visible) => {
    let cloneMap = JSON.parse(JSON.stringify(map));

    cloneMap = cloneMap.slice(
        position[0] - visible < (cloneMap.indexOf(position[0]) + 1) ? 0 : position[0] - visible, 
        position[0] + visible + 1);

    let stringMap = '';

    cloneMap.forEach(el => {
        el = el.slice(
            position[1] - visible < (el.indexOf(position[1]) + 1) ? 0 : position[1] - visible,
            position[1] + visible + 1);
        el.forEach(el2 => {
            stringMap += el2;
        });

        stringMap += '\n';
    });
    return stringMap;
};

export default mapToText;
