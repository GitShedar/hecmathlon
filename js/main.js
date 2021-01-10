class hECMAthlon {

    getMaxValue (input) {
        let maxValues = input.split(",");
        let bigger = (a,b)=>{
            if(parseInt(a) > parseInt(b)){
                return a;
            }else{
                return b;
            }
        }
       
        /* 
        let maxValue = 0;
        for(let i = 0; i < maxValues.length; i++){
            let tempValue = parseInt(maxValues[i]);
            if (tempValue > maxValue) {
                maxValue = tempValue;
            }
        } 
        */

        let maxValue = maxValues.reduce(bigger);
        return [maxValue];
    } 

    getGreaterThan (input) {
        let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter( n => n > parseInt(input));
        
        /* 
        let greaterNums = [];
        for(let j = 0; j < greaterValues.length; j++) {
            if (greaterValues[j] > parseInt(input)) {
                greaterNums.push(greaterValues[j]);
            }
        }
        */
        return greaterValues; 
    }

    fizzBuzz (input) {
        let newArray = [...Array(parseInt(input))];
        let output = newArray.map((currentNumber, index) => {
            let k = index+1;
            let value = k;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            return value;

        });
        /* 
        
        let output = [];
        for (let k = 1; k <= parseInt(input); k++) {
            let value;
        */
            
        //    output.push(value);
        
        return output;
    }
}

export default hECMAthlon;