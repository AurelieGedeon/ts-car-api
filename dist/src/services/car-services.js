"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carService = void 0;
const getAllCars = () => {
    const cars = [];
    const car1 = { make: "Ford", model: "Fiesta", year: 2022 };
    const car2 = { make: "Ford", model: "F-150" };
    cars.push(car1, car2);
    return cars;
};
exports.carService = { getAllCars };
//# sourceMappingURL=car-services.js.map