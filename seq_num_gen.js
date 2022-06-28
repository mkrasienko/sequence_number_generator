const prompt = require('prompt-sync')();

let lastSeq = prompt("What is the last sequence number?  ");
lastSeq = Number(lastSeq);

let iterations = prompt("How many sequence numbers do you need? ");
iterations = Number(iterations);

let seqNums = [];

sequenceNumberGenerator = (lastSeq, iterations) => {
    for (let i = (lastSeq + 1); i < (lastSeq + 1 + iterations); i++){
      seqNums.push(i);
    }
}

sequenceNumberGenerator(lastSeq, iterations);

console.log(seqNums);

lastSeq = seqNums[seqNums.length - 1];

console.log(lastSeq);