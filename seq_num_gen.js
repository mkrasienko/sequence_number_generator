let lastSeq = 6;
let iterations = 10;
let seqNums = [];

sequenceNumberGenerator = (lastSeq, iterations) => {
    for (let i = (lastSeq + 1); i < (lastSeq + 1 + iterations); i++){
      seqNums.push(i);
    }
}

sequenceNumberGenerator(lastSeq, iterations);

// console.log(seqNums);

lastSeq = seqNums[seqNums.length - 1];

console.log(lastSeq);