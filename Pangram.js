//my solution
function isPangram(string) {
  //...
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let suspectedPangram = string.split(" ").join("");
  let suspectedPangramArray = suspectedPangram.split("").sort();
  const alphabetRegex = /^[a-zA-Z]$/;

  let filteredArray = suspectedPangramArray.filter(
    (item, index) => suspectedPangramArray.indexOf(item.toLowerCase()) === index
  );

  filteredArray = filteredArray.filter((char) => alphabetRegex.test(char));

  const filteredString = filteredArray.join("");
  if (filteredString === alphabet) {
    return true;
  } else {
    return false;
  }
}

//best solution
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }
