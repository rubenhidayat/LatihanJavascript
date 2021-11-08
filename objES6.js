
// let car = {
//     speed: 40,
//     accelerate(){
//         this.speed += 10;
//     }
// };
// car.accelerate();
// car.accelerate();
// console.log(car.speed);




// function simpleArraySum(ar) {
//     // Write your code here
//     let sum = 0;
//     for(i=0;i<ar.length;i++){
//         sum += ar[i];
//     }
//     alert(sum)

// }
// x = [1,2,3,4,5];
// simpleArraySum(x);



// const obj1 = {
//     a: 0,
//     b: 2,
//     c: 4
//   };
//   const obj2 = Object.assign({c: 5, d: 6}, obj1);
//   console.log(obj2.c, obj2.d);


// let a = [1,1,2,3,4,4,5,5];

// var removeDuplicate = function(nums){
//     const unique = new Set(nums);
//     console.log(nums.length, unique);
//     a.push(unique);
// }

// removeDuplicate(a);

//rest and spread

// signIn = (username, password, umur)=>{
//     console.log(username+' punya password '+ password +' dan umurnya '+ umur);
// }

// let data = ['ruben hidayat', '123', '23'];
// signIn(...data);

// signIn = (...member)=>{
//     console.log(member);
// }

// username = 'ruben hidayat'
// password = '123'
// umur = '23'
// signIn(username, password, umur);


// function magic(...nums) {
//   let sum = 0;
//   nums.filter(n => n % 2 == 0).map(el => sum+= el);
//   return sum;
// }
// console.log(magic(1, 2, 3, 4, 5, 6));