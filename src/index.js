// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else{
        let result={};
        
        let tmp=Math.floor(currency/50);
        if(tmp>0){
            result.H=tmp;
            currency-=tmp*50;
        }
        tmp=Math.floor(currency/25);
        if(tmp>0){
            result.Q=tmp;
            currency-=tmp*25;
        }
        tmp=Math.floor(currency/10);
        if(tmp>0){
            result.D=tmp;
            currency-=tmp*10;
        }
        tmp=Math.floor(currency/5);
        if(tmp>0){
            result.N=tmp;
            currency-=tmp*5;
        }
        
        if(currency>0){
            result.P=currency;
    
        }
        return result;
    }
}
