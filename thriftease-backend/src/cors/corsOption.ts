const whitelist = ["https://www.mysite.com", "http://localhost:5173", "http://localhost:5174"];

const corsOption = {
  origin: (origin: any, callback: any) => {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
