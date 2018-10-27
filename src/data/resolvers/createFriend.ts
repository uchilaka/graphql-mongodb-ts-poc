import * as crypto from "crypto";
import { Friend } from '../models';
import memDb from '../memdb';

export const createFriend = ({ input }): Friend => {
    console.log("Arguments:::", arguments);
    let id = crypto.randomBytes(10).toString('hex');
    memDb[id] = input;
    return new Friend(id, input);
};

export default createFriend;
