// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  var firstStrs = strs[0];
  var result ='';
  if(!strs.length){
      return result;
  }
  for (var i = 0; i < firstStrs.length; i++) {
      for (var j =  1; j < strs.length; j++) {
          if(firstStrs[i] != strs[j][i]){
              return result;
          }
       }
       result += firstStrs[i];
   }
   return result;

};