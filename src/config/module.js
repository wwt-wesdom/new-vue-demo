/**
 * a.js
 * export const name = 'aaa' // 引入时需加{} 导出的是值
 * import { name } from 'a.js'
 * import {name as myName} from 'a.js'
 * a.js
 * export const age = 20
 * export function doing() {}
 * import {age, doing} from 'a.js'
 * import * as info from 'a.js'
 *
 * a.js
 * export default { 默认导出一个文件里只能有一个 引入时不能加{}
 *   name: 'aaa',
 *   age: 20
 * }
 * import info from 'a.js'
 */

const name = 'wwt';
 const age = 28;
 function doing() {
  console.log('撸代码');
}

export default {
  name: 'wwt',
  age: 28,
  doing() {
    console.log('想去吃饭');
  }
}
