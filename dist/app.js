"use strict";
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Dockerized Node.js Express API with TypeScript",
    });
});
// Throwing an error
app.get("/error", (req, res) => {
    throw new Error("This is a forced error");
});
// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: err.message,
    });
});
// Not Found
app.use((req, res) => {
    res.status(404).json({
        message: "Not Found",
    });
});
exports.default = app;
