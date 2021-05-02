// While Loops
// write a while loop that logs 'hello world' 1000
let helloCount = 0;
while(helloCount < 1000){
  console.log('hello world');
  helloCount ++;
}
// wirte while loop counts 0 to 1000
let loopCount = 0;
while(loopCount < 1001){
  console.log(loopCount);
  loopCount++;
}

// wirte a while looop counts 0 to 1000 and concatenates current loop number
let loopConcatCount = 0;
while(loopConcatCount <= 1000){
  console.log(`current loop number: ${loopConcatCount}`)
  loopConcatCount++;
}

// For Loops
// wirte a for loop counts 0 to 100
for(let i = 0; i <= 100; i++){
  console.log(i);
}

// wirte for loop counts 7 to 635
for(let i = 7; i <= 635; i++){
  console.log(i);
}

// write a for loop using variables



/////////////////////
// Booleans & Loops
// create a loop that prints 'Hi' 15 times
for(let i = 0; i < 15; i++){
  console.log('Hi');
}

// create a loop that prints 'YEP!' 30 times
for(let i = 0; i < 30; i++){
  console.log('YEP!');
}
// create a loop count 0-99 ascending
for(let i = 0; i < 100; i++){
  console.log(i);
}

// create a loop count 0-99 descending
for(let i = 99; i >= 0; i--){
  console.log(i);
}
// create a loop logs only EVEN numbers from 0-98 ascending
for(let i = 0; i < 99; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

// create a loop logs EVEN numbers from 98-0 descending
for(let i = 98; i >= 0; i--){
  if(i % 2 === 0){
    console.log(i);
  }
}

// create a loop that logs the ODD numbers from 0-99 ascending
for(let i = 0; i < 100; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}

// create a loop that logs ODD nums from 0-99 descending
for(let i = 99; i >= 0; i --){
  if(i % 2 !== 0){
    console.log(i);
  }
}

// create a loop that logs nums from 49-72 ascending
for(let i = 49; i <= 72; i++){
  console.log(i);
}

// create a loop that logs nums 81-26 descending
for(let i = 81; i >= 26; i--){
  console.log(i);
}

// create a looop logs nums 3-90 are multiples of 3 ascending
for(let i = 3; i <= 90; i++){
  if(i % 3 === 0){
    console.log(i);
  }
}
