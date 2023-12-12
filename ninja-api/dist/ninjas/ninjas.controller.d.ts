import { NinjasService } from './ninjas.service';
import { Request, Response } from 'express';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getAllNinjas(request: Request, response: Response): Promise<any>;
}
