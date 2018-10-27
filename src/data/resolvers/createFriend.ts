import _ from "lodash";
import * as crypto from "crypto";
import { Friend } from '../models';
import memDb from '../memdb';

export const createFriend = function (payload, xPayload) {
    const { input } = _.isEmpty(payload) ? xPayload : payload;
    let id = crypto.randomBytes(10).toString('hex');
    memDb[id] = input;
    return new Friend(id, input);
};

export default createFriend;
