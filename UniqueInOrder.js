//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//For example:
//
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let iterableArray;
    if(!Array.isArray(iterable)){
      iterableArray = iterable.split('');
    }
    iterableArray = iterable;
    let finalArray = [];
    for(let i=0; i<iterableArray.length; i++){
      if(iterableArray[i] !== iterableArray[i+1]){
        finalArray.push(iterableArray[i]);
      }
    }
    return finalArray;
  }