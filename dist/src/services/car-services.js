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
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const connectDb_1 = require("../connectDb");
const carCollection = (0, connectDb_1.connectDb)().collection("car");
const getAllCars = () => __awaiter(void 0, void 0, void 0, function* () {
    // const cars: Car[] =[];
    // const car1: Car = {make: "Ford", model:"Fiesta", year: 2022}
    // const car2 = {make: "Ford", model: "F-150"} as Car
    // cars.push(car1, car2)
    try {
        const result = yield carCollection.get();
        const cars = result.docs.map((doc) => {
            const car = doc.data();
            car.id = doc.id;
            return car;
        });
        return cars;
    }
    catch (error) {
        return null;
    }
});
const addNewCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield carCollection.add(car);
    car.id = result.id;
    return car;
});
exports.carService = { getAllCars, addNewCar };
//# sourceMappingURL=car-services.js.map