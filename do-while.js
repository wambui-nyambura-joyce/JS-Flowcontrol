let num = [10,20,3,8,7,9,12];
let i = 0;
let sum = 0;
do {
    console.log(i);
    sum += num[i];
    i++;
} while (i < num.length);
console.log({sum});

