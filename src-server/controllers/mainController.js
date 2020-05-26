import {loginCheck} from '../models/users.js'
import {logsAction, getLogsAction, getMySqlDataAction} from '../models/logs.js'

const login = async (req, res) => {
    const data = req.body;

    const userData = await loginCheck(data);

    logsAction(userData);

    await res.json({
        ok: true,
        result: {
            login: userData
        },
        errMsg: ''
    });
}

const getLogs = async (req, res) => {
    const data = req.body;
    const logs = await getLogsAction(data);

    await res.json({
        ok: true,
        result: {
            logsData: logs
        },
        errMsg: ''
    });
}

const getMySqlData = async (req, res) => {
    const data = req.body;
    await getMySqlDataAction(data, (returnData) => {
        res.json({
            ok: true,
            result: {
                data: returnData
            },
            errMsg: ''
        });
    });


}

export default {
    login,
    logsAction,
    getLogs,
    getMySqlData
};