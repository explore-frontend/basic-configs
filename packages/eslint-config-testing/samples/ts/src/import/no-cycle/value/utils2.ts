// eslint-disable-next-line import/no-cycle -- 循环依赖
import { identity } from './utils1';

export const value = 1;

console.log(identity(value));
