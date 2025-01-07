import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT_NO;

import express from "express";
import router from "./routers/user.router";
const app = express();
app.use("/api", router);
app.listen(port, () => {
	console.log(`connected to port:${port}`);
});
