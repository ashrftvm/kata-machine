export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    private parent = (idx: number): number => {
        return Math.floor((idx - 1) / 2);
    };

    private leftChild = (idx: number): number => {
        return 2 * idx + 1;
    };

    private rightChild = (idx: number): number => {
        return 2 * idx + 2;
    };

    insert(value: number): void {}
    delete(): number {}
}
