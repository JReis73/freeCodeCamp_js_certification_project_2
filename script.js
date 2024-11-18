const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");
const numerals = [{
    roman: "M",
    arabic: "1000"
  },
  {
    roman: "CM",
    arabic: "900"
  },
  {
    roman: "D",
    arabic: "500"
  },
  {
    roman: "CD",
    arabic: "400"
  },
  {
    roman: "C",
    arabic: "100"
  },
  {
    roman: "XC",
    arabic: "90"
  },
  {
    roman: "L",
    arabic: "50"
  },
  {
    roman: "XL",
    arabic: "40"
  },
  {
    roman: "X",
    arabic: "10"
  },
  {
    roman: "IX",
    arabic: "9"
  },
  {
    roman: "V",
    arabic: "5"
  },
  {
    roman: "IV",
    arabic: "4"
  },
  {
    roman: "I",
    arabic: "1"
  }];

const checkInput = () => {
  const numberInput = document.getElementById("number");

  if (!numberInput.value){
    outputEl.innerText = "Please enter a valid number";
    return;   
  } else if (parseInt(numberInput.value) < 0){
    outputEl.innerText= "Please enter a number greater than or equal to 1";
    return;
  } else if (parseInt(numberInput.value) >= 4000){
    outputEl.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    getRomanNumeral(numberInput.value);
  }
}

convertBtn.addEventListener("click", checkInput);

const getRomanNumeral = (arabicNumber) => {
  let result = "";

  while (arabicNumber > 0){
    let currentEntry = numerals.find(X => X.arabic <= parseInt(arabicNumber));
    result += currentEntry.roman;

    arabicNumber -= currentEntry.arabic;
  };

  outputEl.innerText = result;
};