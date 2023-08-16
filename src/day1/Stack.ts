type Node<T> = {
    prev?: Node<T> | undefined
    value: T
}
export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newItem = {
            prev: this.head,
            value: item
        } as Node<T>
        this.length++;
        this.head = newItem

    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if(this.length === 0){
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head
        this.head = head?.prev;
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}