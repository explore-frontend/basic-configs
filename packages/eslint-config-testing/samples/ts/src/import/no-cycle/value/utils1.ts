// eslint-disable-next-line import/no-cycle -- 循环依赖
import { value } from './utils2';

export const identity = <T>(x: T): T => x;

console.log(identity(value));
