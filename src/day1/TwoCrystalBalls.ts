export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpNumber = Math.floor(Math.sqrt(breaks.length / 2));

    let i = jmpNumber;

    for (; i < breaks.length; i += jmpNumber) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpNumber;

    for (let j = 0; j <= jmpNumber && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
