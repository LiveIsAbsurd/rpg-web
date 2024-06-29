import carve from "./carve";

const createMap = (heroPosition, size = [20, 20]) => {
    const newMap = [];
    for (let y = 0; y < size[0]; y++) {
        // if (y === size[0] - 1) {
        //     let end = [];

        //     for (let x = 0; x < size[1]; x++) {
        //         end.push('⬛️')
        //     }

        //     newMap.push(end);
        // } else {
            newMap.push([]);
        // }
    }

    newMap.forEach(y => {
        if (y.length === 0) {
            for (let x = 0; x < size[1]; x++) {
                // x === 0 || x === size[1] - 1 ? y.push('⬛️') :
                    y.push('⬛️');
            }
        }
    });

    carve(1, 1, newMap, size);

    //
    // let end = [];

    // for (let x = 0; x < size[1]; x++) {
    //     end.push('⬛️')
    // }

    // newMap.push(end);

    // newMap.forEach(y => {
    //     y.push('⬛️');
    // });
    //

    newMap[heroPosition[0]][heroPosition[1]] = '🔘';
    // const boxPosition = [(Math.random() * size[0] + 1).toFixed(0), (Math.random() * size[1] + 1).toFixed(0)];
    // newMap[boxPosition[0]][boxPosition[1]] = '⚰';

    return newMap;
};

export default createMap;