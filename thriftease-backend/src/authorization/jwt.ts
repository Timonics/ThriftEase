import { expressjwt, Request } from "express-jwt";
import * as dotenv from "dotenv";

dotenv.config();

const authJwt = () => {
  const dbURL = process.env.API_BASE_URL;
  const secretKey = process.env.JWT_SECRET_KEY || "GoOdOnEmIcK";

  return expressjwt({
    secret: secretKey,
    algorithms: ["HS256"],
    isRevoked: async (req: Request, token) => {

      return false;
    },
  }).unless({
    path: [
      { url: `${dbURL}users/login`, methods: "POST" },
      { url: `${dbURL}users/logout`, methods: "POST" },
      { url: `${dbURL}users/register`, method: "POST" },
      //{ url: `${dbURL}categories/register`, method: "POST" },
    ],
  });
};

export default authJwt
