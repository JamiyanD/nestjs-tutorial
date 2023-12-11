import { User } from './User';
import { SessionEntity } from './Session';
declare const entities: (typeof User | typeof SessionEntity)[];
export { User, SessionEntity };
export default entities;
