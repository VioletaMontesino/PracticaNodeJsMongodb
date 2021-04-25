import mongoose from "mongoose";

let uri = 'mongodb://'+process.env.MONGO_HOST+':'+process.env.MONGO_PORT;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch(err => {
    console.error(err);
  });
