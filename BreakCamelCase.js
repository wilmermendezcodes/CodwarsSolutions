function solution(string) {
    const stringArray = string.split('');
    let stringArrayIndices = [0];
    let camelWords = [];

    if (string) {
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i] === stringArray[i].toUpperCase()) {
                let occurrence = stringArray.indexOf(stringArray[i], i); // Find index of current uppercase letter
                console.log(occurrence)

                if (occurrence !== -1) { // Check if index was found
                    stringArrayIndices.push(occurrence); // Store index of uppercase letter
                }
            }
        }

        // Ensure the last word is included
        stringArrayIndices.push(stringArray.length);

        stringArrayIndices.forEach((item, index, arr) => {
            camelWords.push(stringArray.slice(arr[index], arr[index + 1]).join(''));
        });

        const finalWords = camelWords.join(' ').trim();
        return finalWords;
    } else {
        return "";
    }
}