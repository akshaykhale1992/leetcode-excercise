const hasCycle = (head) => {
    let nextItem = head;
    while (head && head.next) {
        head = head.next;
        nextItem = nextItem?.next?.next;
        if (head === nextItem) return true;
    }
    return false;
};