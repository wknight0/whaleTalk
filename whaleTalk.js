let input = 'Please input a phrase ';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++)
{
  for (let k = 0; k < vowels.length; k++)
  {
    if (input[i] === vowels[k])
    {
      if (input[i] === 'u' || input[i] === 'e')
      {
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      }
      else
      {
        resultArray.push(input[i]);
      }
    }
  }
}

let resultString = resultArray.join();

let finalString = (resultString.replace(/[^a-zA-Z]/g, '')).toUpperCase();

console.log(finalString);
