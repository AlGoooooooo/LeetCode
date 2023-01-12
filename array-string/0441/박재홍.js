/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let i = 0;
    while(n > 0){
        n = n - ++i;
    }
    return n === 0 ? i : i -1;
};

// 등차수열을 이용한 다른 방법 메모리 등수 순위 올라감 ( 49.33% -> 59.3% )
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins1 = function(n) {
    
    for(let i = 1 ; i <= n ; i ++){ 
        const result = (i ** 2 + i ) / 2;
        if(result === n) return i;
        if(result > n) return i-1;
    }
    return 0;
};
