
function carve(x, y, map, size) {
    let directions = [
        [0, -1], // вверх
        [0, 1], // вниз
        [-1, 0], // влево
        [1, 0] // вправо
    ];

    // Перемешиваем направления
    directions.sort(() => Math.random() - 0.5);

    for(let i = 0; i < directions.length; i++) {
        let dx = directions[i][0];
        let dy = directions[i][1];

        let nx = x + dx*2;
        let ny = y + dy * 2;

        if (nx >= 0 && nx < size[1] && ny >= 0 && ny < size[0] && map[ny][nx] === '⬛️') {
            if (y + dy !== size[0] && x + dx !== size[1] && ny !== size[0] && nx !== size[1]) {
                map[y+dy][x+dx] = '⬜️';
                map[ny][nx] = '⬜️';
            }
            carve(nx, ny, map, size);
        }
    }
}

export default carve;
