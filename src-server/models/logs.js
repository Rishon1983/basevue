import mongoose from 'mongoose';
import mysql from 'mysql'

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

const getMySqlConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        charset: 'utf8_general_ci',
        database: 'test'
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

const getMySqlDataAction = (data, next) => {

    const connection = getMySqlConnection();
    connection.query('SELECT * FROM users', (err, result, fields) => {
        if (err) throw err;
        next(result);
    })
}

export {
    logsAction,
    getLogsAction,
    getMySqlDataAction
}