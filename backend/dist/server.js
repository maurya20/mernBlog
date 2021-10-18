"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
mongoose_1.default.connect("mongodb://localhost:27017/Multer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully connected to DataBase"))
    .catch((err) => {
    console.log(err);
});
//mongoose.set({useFindAndModify: false});
const port = process.env.PORT || 5000;
const server = app_1.default.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
exports.server = server;
