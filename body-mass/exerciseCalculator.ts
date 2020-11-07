interface TrainingPlan {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

export const calculateExercises = (targetHours: number, exercisesHours : Array<number>) : TrainingPlan => {
  const numDays = exercisesHours.length;
  const numTrainingDays  = exercisesHours.filter(hours => hours > 0).length;
  const avg = exercisesHours.reduce((previous, current) => previous + current) / numDays;
  const success = exercisesHours.filter(hours => hours < targetHours).length == 0;
  const numCompletedDays = exercisesHours.filter(hours => hours >= targetHours).length;

  let rating = 0;
  let result = "";
  if (numCompletedDays < (numTrainingDays * 0.25)) {
    rating = 1;
    result = "Target not achieved";
  } else if (numCompletedDays > (numTrainingDays * 0.25) || numCompletedDays < (numTrainingDays * 0.75)) {
    rating = 2;
    result = "You're almost there";
  } else {
    rating = 3;
    result = "Nice work!";
  }

  return {
    periodLength: numDays,
    trainingDays: numTrainingDays,
    success: success,
    rating: rating,
    ratingDescription: result,
    target: targetHours,
    average: avg
  };
};

/*interface ExerciseData {
  targetHours : number,
  exerciseHours: Array<number>
}

const parseExerciseArguments = (args: Array<string>) : ExerciseData => {
  if (args.length < 4) throw new Error('not enough arguments');

  let targetHours = 0;
  const exerciseHours = [];
  for(let i = 2; i < args.length; i++) {
    const hours = Number(args[i]);
    if (!isNaN(hours)) {
      if (i == 2) {
        targetHours = hours;
      } else {
        exerciseHours.push(hours);
      }
    } else {
      throw new Error('all the arguments should be numbers');
    }
  }

  return {
    targetHours,
    exerciseHours
  };
};

const exerciseData = parseExerciseArguments(process.argv);
console.log(calculateExercises(exerciseData.targetHours, exerciseData.exerciseHours));*/