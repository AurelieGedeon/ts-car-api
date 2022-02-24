"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_services_1 = require("./services/car-services");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/cars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_services_1.carService.getAllCars();
    res.status(200).json(result);
}));
app.post("/cars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { make, model, year } = req.body;
    const car = { make, model, year };
    try {
        const result = yield car_services_1.carService.addNewCar(car);
        car.id = result.id;
    }
    catch (error) {
        res.status(500).send("Something went wrong");
    }
    res.status(201).json(car);
}));
app.all("*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_services_1.carService.getAllCars();
    res.status(200).json(result);
}));
const port = 3450;
app.listen(port, () => {
    console.log(`We be listening on port ${port}`);
});
//# sourceMappingURL=index.js.map