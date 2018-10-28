import _ from "lodash";
import { Friend } from '../models';
import memDb from '../memdb';

export const getFriend = (_root, xPayload) => {
    const { id } = _.isEmpty(_root) ? xPayload : _root;
    if (typeof id === 'string') {
        return new Friend(id, memDb[id]);
    }
    // else return recent friends
}

export default getFriend;