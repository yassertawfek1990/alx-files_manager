/* erjhhbl lkj eklwrng kje klkejln lker k */
import { Request, Response, NextFunction } from 'express';

/*jewrkn kjnkjn wekjlrrn gkjln wekljr n*/
export class APIError extends Error {
  constructor(code, message) {
    super();
    this.code = code || 500;
    this.message = message;
  }
}

/**
 * Aerv lern lvnlekrn vlker nqrlkvqernl
 */
export const errorResponse = (err, req, res, next) => {
  const defaultMsg = `Failed to process ${req.url}`;

  if (err instanceof APIError) {
    res.status(err.code).json({ error: err.message || defaultMsg });
    return;
  }
  res.status(500).json({
    error: err ? err.message || err.toString() : defaultMsg,
  });
};
