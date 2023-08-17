const dir = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) {

    // check if its outside the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false
    }

    // check if its a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    // check if end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true
    }

    // check if seen before
    if (seen[curr.y][curr.x]) {
        return false
    }
    
    // pre
    seen[curr.y][curr.x] = true
    path.push(curr)

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: x + curr.x,
            y: y + curr.y
        }, end, seen, path)) {
            return true
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }
    const path: Point[] = [];

    walk(maze, wall, start, end, seen, path)
    return path
}