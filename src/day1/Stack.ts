type Node<T> = {
    prev?: Node<T> | undefined
    value: T
}
export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;
    private prev: Node<T> | undefined;


    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const newItem = {
            prev: this.head,
            value: item
        }
        this.head = newItem;
    }
    pop(): T | undefined {
        if(!this.head){
            return undefined
        }
        const head = this.head
        this.head = head?.prev;
        this.length --;
        if(this.length === 0){
            this.head = this.prev = undefined
        }
        return head?.value
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}