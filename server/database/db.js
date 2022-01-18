import mongoose from "mongoose";
// useFindAndModify: false newuser1234
const Connction = async (password,username) => {
  const URL =`mongodb://${username}:${password}@whatsapp-shard-00-00.o2wwk.mongodb.net:27017,whatsapp-shard-00-01.o2wwk.mongodb.net:27017,whatsapp-shard-00-02.o2wwk.mongodb.net:27017/WHATSAPP?ssl=true&replicaSet=atlas-o42382-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connction;
