"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.addUser = exports.getUser = void 0;
const data_1 = __importDefault(require("../data"));
const getUser = (req, res, next) => {
    res.status(200).json(data_1.default);
};
exports.getUser = getUser;
const addUser = (req, res, next) => { };
exports.addUser = addUser;
const deleteUser = (req, res, next) => { };
exports.deleteUser = deleteUser;
const updateUser = (req, res, next) => { };
exports.updateUser = updateUser;
