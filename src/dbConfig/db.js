import { set, connect } from "mongoose";

const db = async () => {
  try {
    set("strictQuery", true);
    const db = await connect(process.env.MONG_URI, {}).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log("not connected");
  }
};

export default db;
