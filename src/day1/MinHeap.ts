export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.parent(idx);
        const parentV = this.data[p];
        const v = this.data[idx];

        if (parentV > v) {
            this.data[idx] = parentV;
            this.data[p] = v;
            this.heapifyUp(p);
        }
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
