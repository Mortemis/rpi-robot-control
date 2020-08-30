import { Request, Response } from 'express';

import robot = require('../robot');

export const fwd = (req: Request, res: Response) => {
    robot.moveFwd();
    res.status(200).json({msg: 'ok'});
}

export const back = (req: Request, res: Response) => {
    robot.moveBack();
    res.status(200).json({msg: 'ok'});
}

export const left = (req: Request, res: Response) => {
    robot.rotateLeft();
    res.status(200).json({msg: 'ok'});
}

export const right = (req: Request, res: Response) => {
    robot.rotateRight();
    res.status(200).json({msg: 'ok'});
}