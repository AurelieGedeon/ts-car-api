import express, { json, Request, Response } from "express";
import { Car } from "./models/car";
import { carService } from "./services/car-services";

const app = express();
app.use(express.json());

app.get("/cars", async (req: Request, res: Response) => {
  const result = await carService.getAllCars();
  res.status(200).json(result);
});

app.post("/cars", async (req: Request, res: Response) => {
  const { make, model, year } = req.body;
  const car: Car = { make, model, year };

  res.status(201).json(car);
});

app.all("*", async (req: Request, res: Response) => {
  const result = await carService.getAllCars();

  res.status(200).json(result);
});
const port = 3450;

app.listen(port, () => {
  console.log(`We be listening on port ${port}`);
});
