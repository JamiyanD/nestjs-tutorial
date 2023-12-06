import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getNinjas(weapon: 'stars' | 'nunchucks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
    createNinja(createNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "stars" | "nunchucks";
    };
    updateNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
    deleteNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
}
