// function sumofdigits(num){
    
//     let sum=0;
//     while(num>0){
//         sum+=num%10;
//         num.math.floor(sum/10);
//     }
//     return sum;
// }
// console.log(sumofdigits(123));


 1.// Write a function to find the length of the last word in a string.
 function lengthlastword(str){
    let length=0;
    let i=str.length-1
         while(i>=0 && str[i]==='')
            i--;
         while(i>=0 && str[i]!=='')
            length++;
             i--;
         return length;
}
        console.log(lengthlastword("javascrip is fun"));
        
    
    
    
// 2. Write a program to find the largest prime factor of a given number.
function largestprime(n){
    let fac=2
    while(fac*fac<=n){
        if(n%fac===0){
            n=n/fac;
        }else{
            fac++;
        }
    }
    return n;
}
console.log(largestprime(10));
// 3.Implement a program to calculate the square root of a number.
function squareroot(number){
    if(number<0){
        return"square root of neg number is not real"
    }
    return Math.sqrt(number)
}
console.log(squareroot(25));


// .Implement a program to find the sum of all even numbers in an array.
    
function sumEvenNumbers(numbers) {   
    let sum=0;
    for (let i=0;i<numbers.length; i++) {
        if (numbers[i] % 2 === 0) { 
            sum+= numbers[i];
        } else {
            
        }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5]));