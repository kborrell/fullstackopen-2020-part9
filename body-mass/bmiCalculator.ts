export const calculateBmi = (height: number, weight: number) : string => {
  const height2 = Math.pow(height / 100, 2);
  const bmi = weight / height2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal (healthy weight)";
  } else {
    return "Overweight";
  }
};

/*interface BmiData {
  weight : number,
  height: number
}

const parseBmiArguments = (args: Array<string>) : BmiData => {
  if (args.length < 4) throw new Error('not enough arguments')
  if (args.length > 4) throw new Error('too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

const { height, weight } = parseBmiArguments(process.argv)
console.log(calculateBmi(height, weight))*/