import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersLogSchema = new Schema({
    userId: {type: String, require: true, default: ''},
    CT: {type: Date, require: true, default: new Date()}
});

const getConnection = () => {
    return mongoose.createConnection('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
};

const logsAction = (data) => {

    const Logs = getConnection().model('logs', usersLogSchema);
    Logs.create({
        userId: data.id
    });
}

const getLogsAction = (data) => {

    const Logs = getConnection().model('logs', usersLogSchema);
    return Logs.find()
}

export {
    logsAction,
    getLogsAction
}