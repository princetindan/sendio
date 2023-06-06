import express from "express";
const app = express();
import "./env.js"
import sequelize from "./database/dbConfig.js";
const port = process.env.PORT || 5000;

app.use(express.json());

//import routes
import userRoutes from "./routes/userRoutes.js";


//use routes
app.use("/user", userRoutes);


(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection eastablished successfully");
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        });
    }
    catch (error) {
        console.log(error);
        console.log('Unable to connect to the database.......')
    }
})();