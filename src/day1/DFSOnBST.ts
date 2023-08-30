export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) return false;

    if (head.value === needle) return true;

    if (head.value < needle) {
        if (head.right) return dfs(head.right, needle);
        return false;
    }
    if (head.left) return dfs(head.left, needle);
    return false;
}
