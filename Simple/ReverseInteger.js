// 给定一个 32 位有符号整数，将整数中的数字进行反转
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0
  let arr = x.toString().split('')
  let reArr = arr.reverse()
  if ( x < 0) {
      reArr.pop ()
      result = parseInt('-' + reArr.join('')) 
  }else {
      result = parseInt(reArr.join('')) 
  }   
  if ( result >= 2147483647 || result < -2147483648 ) {
      result = 0
  }
  return result
};