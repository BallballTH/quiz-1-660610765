/* assign interface/type to the function definition properly */
const q1_odd = (m:number,n:number):number =>{
    let sum:number = 0;
    for(let i:number = m+1;i<n;i++){
      if(i%2 == 1){
        sum += i ;
      }
    }
    return sum;
  }
  

//test cases
console.log(q1_odd(1, 3));
console.log(q1_odd(6, 10));

export default q1_odd;
