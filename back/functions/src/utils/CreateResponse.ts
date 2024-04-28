import { Response } from "express";

type ResponseData<T> = {
  data?: T;
  message?: string;
};

export function createResponse<T>(res: Response, statusCode: number, payload: ResponseData<T>) {
  res.status(statusCode).json(payload);
}