import { Request, Response } from "express"
import dbConnect from "../config/mongo";
import { HandleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";



const getItems = (req: RequestExt, res: Response) => {
    try {
      res.send({
            data: "ESTO SOLO LO VE LAS PERSONAS CON ACCESO",
            user: req.user,
      }
      
      );

    } catch (e) {
         HandleHttp(res, "ERROR_BLOGS_");
    }
  };
  
  export { getItems };

  