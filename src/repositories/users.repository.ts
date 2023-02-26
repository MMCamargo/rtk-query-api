import { IUser } from '../models';
import { v4 as uuidv4 } from 'uuid';

class UserRepository {
	users: IUser[] = [];

	post(name: string) {
		const user: IUser = {
			uid: uuidv4(),
			name,
			password: uuidv4(),
		};

		this.users.push(user);
	}

	getAll() {
		return this.users;
	}
}

const userRepository = new UserRepository();

export default userRepository;
