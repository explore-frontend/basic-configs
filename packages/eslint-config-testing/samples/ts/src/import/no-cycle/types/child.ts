import { type TreeNode, TreeNodeType } from './tree';

export type Leaf<T> = {
    readonly type: TreeNodeType.Leaf;
    readonly value: T;
};

export type Node<T> = {
    readonly type: TreeNodeType.Node;
    readonly children: ReadonlyArray<TreeNode<T>>;
};
