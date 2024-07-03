import carve from "./carve";

const createMap = (heroPosition, size = [20, 20]) => {
    const newMap = [];
    for (let y = 0; y < size[0]; y++) {
            newMap.push([]);
    }

    newMap.forEach(y => {
        if (y.length === 0) {
            for (let x = 0; x < size[1]; x++) {
                    y.push('wall');
            }
        }
    });

    carve(1, 1, newMap, size);

    for (let i = 1; i < size[0]; i++) {
        if ((Math.random() * 100 + 1) > 70) {
            newMap[i][i] = 'floor';
        }
    }
    console.log(newMap)

    newMap[heroPosition[0]][heroPosition[1]] = 'hero';
    // const boxPosition = [(Math.random() * size[0] + 1).toFixed(0), (Math.random() * size[1] + 1).toFixed(0)];
    // newMap[boxPosition[0]][boxPosition[1]] = '⚰';

    return newMap;
};

export default createMap;