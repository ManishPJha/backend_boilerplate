import { Request, Response, NextFunction } from "express";

export const asyncFunction =
  (Func: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(Func(req, res, next)).catch(next);
  };
