import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-73vhi9c-shard-00-00.pz3h0wx.mongodb.net:27017,ac-73vhi9c-shard-00-01.pz3h0wx.mongodb.net:27017,ac-73vhi9c-shard-00-02.pz3h0wx.mongodb.net:27017/?ssl=true&replicaSet=atlas-7pvaez-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;