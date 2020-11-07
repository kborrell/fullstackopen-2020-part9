import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(weight) || isNaN(height)) {
    res.status(400).send("malformatted parameters");
  } else {
    res.send({
      weight,
      height,
      bmi: calculateBmi(height, weight)
    });
  }
});

interface ExerciseParams {
  target : number,
  daily_exercises: Array<number>
}

app.post('/exercises', (req, res) => {
  const params = req.body as ExerciseParams;

  if (!params.target || !params.daily_exercises) {
    return res.status(400).send("parameters missing");
  }

  if (isNaN(Number(params.target))) {
    return res.status(400).send("malformatted parameters 1");
  }

  if (params.daily_exercises.length === 0) {
    return res.status(400).send("parameters missing");
  }

  for (const hours of params.daily_exercises) {
    if (isNaN(Number(hours))) {
      return res.status(400).send("malformatted parameters 2 ");
    }
  }

  return res.json(calculateExercises(params.target, params.daily_exercises));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});