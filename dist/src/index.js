"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_services_1 = require("./services/car-services");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.all('*', (req, res) => {
    const result = car_services_1.carService.getAllCars();
    res.status(200).json(result);
});
const port = 3450;
app.listen(port, () => {
    console.log(`We be listening on port ${port}`);
});
//# sourceMappingURL=index.js.map