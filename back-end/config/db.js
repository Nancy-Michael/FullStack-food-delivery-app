import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nancymichael:8RTegzVJwpD5oIh7@cluster0.vzzyg.mongodb.net/food-delivery')
        .then(() => console.log("DB connected"));
}
