const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected successfully"))
    .catch((error: any) => {
      console.log("DB connection failed");
      console.error(error);
      process.exit(1);
    });
};

export default connect;