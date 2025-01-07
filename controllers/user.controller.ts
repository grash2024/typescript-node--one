import { NextFunction, Request, Response } from "express";
import ResponseDto from "../dtos/response.dto";
import data from "../data";

const getUser = (
	req: Request,
	res: Response<ResponseDto[]>,
	next: NextFunction
) => {
	res.status(200).json(data);
};
const addUser = (req: Request, res: Response, next: NextFunction) => {};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {};
const updateUser = (req: Request, res: Response, next: NextFunction) => {};
export { getUser, addUser, deleteUser, updateUser };
