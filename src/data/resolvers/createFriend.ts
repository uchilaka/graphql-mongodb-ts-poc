import _ from "lodash";
import * as crypto from "crypto";
import { Friend } from '../models';
import memDb from '../memdb';

export const createFriend = function (memPayload, payload) {
    const { input } = _.isEmpty(memPayload) ? payload : memPayload;
    let id = crypto.randomBytes(10).toString('hex');
    memDb[id] = input;
    return new Friend(id, input);
};

export default createFriend;
