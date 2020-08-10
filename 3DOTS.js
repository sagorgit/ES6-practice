const ages = [12, 23, 34, 45 ,14];
const ages2 = [ 62, 23, 19, 67, 47];
const allAges = ages.concat([56]).concat(ages2);
const allAges2 = [...ages, 5, ...ages2];
// console.log(allAges2);
const business = 644;
const minister = 345;
const sakib = 234;
const takaPaisa = [644, 345, 234];
const maximum = Math.max(...takaPaisa);
// const maximum = Math.max(business, minister, sakib);
const minimum = Math.min(...takaPaisa);

console.log(minimum);