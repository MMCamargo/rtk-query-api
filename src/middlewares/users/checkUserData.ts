import { IDefaultResponse } from '../../common/interfaces';
import { Request, Response, NextFunction } from 'express';

const checkUserData = (req: Request, res: Response, next: NextFunction) => {
	const { name } = req.body;

	if (!name) {
		res.status(400).json({
			success: false,
			message: 'Missing user name.',
		} as IDefaultResponse);
	} else next();
};

export default checkUserData;
