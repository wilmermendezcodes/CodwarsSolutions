function towerBuilder(nFloors) {
    let asterisk = '*';
    const offsetArrayOne = [];
    const offsetArrayTwo = [];
    const oddNumbersArray = [];
    const finalArray = [];
    
    for(let i=0; i<nFloors; i++){
      offsetArrayOne.push(i);
    }
    for(let j=1; j<=nFloors; j++){
      offsetArrayTwo.push(j);
    }
    offsetArrayOne.forEach((currentValue, index) => {oddNumbersArray.push(currentValue + offsetArrayTwo[index])});
    
    oddNumbersArray.forEach((currentValue, index) => {
      let spaces = ' '.repeat(nFloors - index - 1);
      finalArray.push(spaces + asterisk.repeat(currentValue) + spaces);
    });
    
    console.log(finalArray);
    return finalArray;
  }