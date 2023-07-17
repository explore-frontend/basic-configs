// import type 不会导致循环引用，因为它只是在类型检查时存在，不会导致实际的引用
import type { Leaf, Node } from './child';

export enum TreeNodeType {
    Leaf = 0,
    Node = 1,
}

export type TreeNode<T> = Leaf<T> | Node<T>;
