import { usersRepository } from '../repositories';
import { IDefaultResponse } from '../common/interfaces';
import { Request, Response } from 'express';

class UsersController {
	post(req: Request, res: Response) {
		const { name } = req.body;

		usersRepository.post(name);

		res.status(201).json({
			success: true,
			message: 'User created.',
		} as IDefaultResponse);
	}

	getAll(req: Request, res: Response) {
		const users = usersRepository.getAll();

		res.status(200).json({
			success: true,
			data: users,
		} as IDefaultResponse);
	}
}

const usersController = new UsersController();

export default usersController;
