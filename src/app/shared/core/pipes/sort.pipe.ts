// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({  
//     name: 'sort',  
//     pure:false,  
//   })  
//   export class SortPipe implements PipeTransform {  
    
//     transform(value: any[], direcion: boolean, prop?: string): any {  
//       if (!value) {  
//         return [];  
//       }  
//       if (!prop) {  
//         return value  
//       }  
//       if (value.length > 0) {  
//         const _direction = direcion === true ? -1 : 1,  
//           _isArr = Array.isArray(value),  
//           _type = typeof value[0],  
//           _flag = _isArr && _type === 'object' ? true : _isArr && _type !== 'object' ? false : true;  
//         value.sort((a, b) => {
//           a = _flag ? a[prop] : a;  
//           b = _flag ? b[prop] : b;  
//           if (typeof a === 'string') {  
//             return a > b ? -1 * _direction : 1 * _direction;  
//           } else if (typeof a === 'number') {  
//             return a - b > 0 ? -1 * _direction : 1 * _direction;  
//           }  
//         });  
//       }  
//       return value;  
//     }  
//   }