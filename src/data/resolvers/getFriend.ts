import _ from "lodash";
import { Friend } from '../models';
import memDb from '../memdb';

export const getFriend = (payload, xPayload) => {
    const { id } = _.isEmpty(payload) ? xPayload : payload;
    if (typeof id === 'string') {
        return new Friend(id, memDb[id]);
    }
    // else return recent friends
}

export default getFriend;