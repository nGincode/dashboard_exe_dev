"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueCode = void 0;
// RANDOM UNIQUE CODE
const generateUniqueCode = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate).toString();
    return timestamp;
};
exports.generateUniqueCode = generateUniqueCode;
