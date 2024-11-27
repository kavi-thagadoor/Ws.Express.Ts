import * as mongoose from 'mongoose';
import * as cons from './Constant';

export const connectToDatabase = async () => {
    await ConnectToDb();
}

const ConnectToDb = async () => {
    try {
        await mongoose.connect(cons.GetEnvConfigByKey(cons.EnvConfigKey.DbUrl), { autoIndex: true })
            .then(() => {
                console.log('Successfully connected to MongoDb..');
            });
    } catch (ex) {
        console.log(ex);
    }
}