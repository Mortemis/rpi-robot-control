import { Request, Response } from 'express';

import robot = require('../robot');

export const fwd = (req: Request, res: Response) => {
    robot.moveFwd();
}

export const back = (req: Request, res: Response) => {
    robot.moveBack();
}

export const left = (req: Request, res: Response) => {
    robot.rotateLeft();
}

export const right = (req: Request, res: Response) => {
    robot.rotateRight();
}