import mongoose from "mongoose";

type DBInput = {
    db: string
}

export const connect = async ({ db }: DBInput) => {
    await mongoose.connect(db)
        .then(() => {
            console.log(`--~~~=:>[XXXXXXXXX]> Connected to ${db}`);
        })
        .catch(err => {
            console.log(`--~~~=:>[XXXXXXXXX]> ${err}`);
            return process.exit(1);
        });
    };
mongoose.connection.on('disconnected', connect);