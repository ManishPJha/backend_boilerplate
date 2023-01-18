import { Request, Response, NextFunction } from "express";

export const democall = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).end("OK");
};
