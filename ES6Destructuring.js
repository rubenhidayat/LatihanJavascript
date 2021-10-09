//destructuring


//assign variables from objects
var voxel = {x:3.6, y:7.4, z: 6.54};
const{x,y,z} = voxel;
console.log(x);
const{x:a, y:b, z:c} = voxel;
console.log(b);

//assign variables from nested objects
const nest = {
    start: {x:5, y:6},
    end: {x:6, y:-9}
};
const {start: {x:startX, y:startY}} = nest;
console.log(startX);

//assign variables from arrays
const {q,,,r} = [1,2,3,4,5];
console.log(q,r);

//assign operator to reassign array elements
const {e,t, ...rest} = [1,2,3,4,5];
console.log(e,t);
console.log(rest);

