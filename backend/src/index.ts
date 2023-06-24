import express, { Request, Response } from 'express';
import cors from 'cors';

interface CarLog {
  carMake: string;
  carModel: string;
  carBadge: string;
  logContent: string;
}

const app = express();
const port = 3003;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'POST',
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

// POST endpoint for car logs
app.post('/api/carlogs', (req: Request, res: Response) => {
  const { carMake, carModel, carBadge, logContent }: CarLog = req.body;

  // Perform any desired operations with the received data
  // For this example, we'll simply log the data to the console

  console.log('Car Make:', carMake);
  console.log('Car Model:', carModel);
  console.log('Car Badge:', carBadge);
  console.log('Log Content:', logContent);

  // Send a response with the received data
  const response: CarLog = {
    carMake,
    carModel,
    carBadge,
    logContent,
  };

  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
