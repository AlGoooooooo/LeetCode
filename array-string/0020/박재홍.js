//Runtime: 74 ms, faster than 71.76% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 42.1 MB, less than 81.99% of JavaScript online submissions for Valid Parentheses.
//시간복잡도 o(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = []; 

    const compare = (target,original) => {
        if(original === "(") return target === ")";
        if(original === "[") return target === "]";
        if(original === "{") return target === "}";
        return false;
    }
    const maxLength = s.length;
    for(let i = 0 ; i < maxLength;i++ ){
        if(stack.size !== 0 && compare(s[i], stack[stack.length-1])){
            stack.pop();
            continue; 
        } 
        stack.push(s[i]);
    }
    return stack.length === 0 
};



//Runtime: 55 ms, faster than 99.7% of JavaScript online submissions for Valid Parentheses.
//Memory Usage: 41.4 MB, less than 99.48% of JavaScript online submissions for Valid Parentheses.

//시간복잡도 o(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function(s) {
    const compare = (target,original) => {
        if(original === "(") return target === ")";
        if(original === "[") return target === "]";
        if(original === "{") return target === "}";
        return false;
    }
    return s.split("").reduce((pre,cal) => {
        if(pre.length === 0) return [cal];
        if(compare(cal, pre[pre.length-1])){
            pre.pop();
            return pre; 
        }
        pre.push(cal);
        return pre;
    }, []).length === 0;
};
