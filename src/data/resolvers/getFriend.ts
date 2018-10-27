import { Friend } from '../models';
import memDb from '../memdb';

export const getFriend = ({ id }) => {
    if (typeof id === 'string') {
        return new Friend(id, memDb[id]);
    }
    // else return recent friends
}

export default getFriend;