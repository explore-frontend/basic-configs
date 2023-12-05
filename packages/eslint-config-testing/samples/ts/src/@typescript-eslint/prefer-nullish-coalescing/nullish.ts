declare const a: {} | null;
// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- 对象不允许用 ||
const na = a || {};

// 字符串和数字可以用 ||
declare const s: string | null;
const ns = s || '';
declare const n: number | null;
const nn = n || '';
