import { get, post } from './axios';
import Settings from './../etc/settings';

const ServerUrl = Settings.server_url;

const getTest = async (data) => {
    let res = await get({
        url: ServerUrl,
        data
    });
    return res;
}

const postTest = async (data) => {
    let res = await post({
        url: ServerUrl,
        data
    });
    return res;
}

export {
    getTest,
    postTest
}
