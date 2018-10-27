import _ from "lodash";
import { Friend } from '../models';
import memDb from '../memdb';

export const getFriend = (memPayload, payload) => {
    const { id } = _.isEmpty(memPayload) ? payload : memPayload;
    if (typeof id === 'string') {
        return new Friend(id, memDb[id]);
    }
    // else return recent friends
}

export default getFriend;