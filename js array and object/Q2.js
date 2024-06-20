// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 2i, 24, 25, 24]
// Sort the array and find the min and max age.
// Find the median age(one middle item or two middle items divided by two)
// Find the average age( all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method.

// finding min and max
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a, b) => a - b);
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length-1])
 
// finding median 
let median
if(ages.lenght %2==0){
    median = ages[(ages.length/2)-1] + ages[ages.length]/2;
    console.log(median);
}else{
    median = ages[Math.floor(ages.length/2)]
    console.log(median);
}


// finding average
let result = 0
let average
for(i=0; i<ages.length;i++){
    result= result+ages[i];
}
average = result/ages.length;
console.log(average);

// finding range
console.log(ages[ages.length-1]-ages[0]);


// camparing the values using abs method

let minrange = Math.abs(ages[0]-average);
let maxrange = Math.abs(ages[ages.length-1]- average );
console.log(minrange);
console.log(maxrange);