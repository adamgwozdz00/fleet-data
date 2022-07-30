import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthResult } from "./auth-result";


export class AuthService {
  authenticateToken(req: Request, res: Response) : AuthResult{
 
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return new AuthResult(false,401);

    try {
      jwt.verify(token, process.env.TOKEN_SECRET as string);
      return new AuthResult(true,200);
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        return new AuthResult(false,403);
      }

      return new AuthResult(false,403);
    }
  }
}
