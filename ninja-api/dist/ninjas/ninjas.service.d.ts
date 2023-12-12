import { PrismaService } from 'src/prisma.service';
import { Ninjas } from './ninjas.model';
export declare class NinjasService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllNinjas(): Promise<Ninjas[]>;
    createNinja(data: Ninjas): Promise<Ninjas>;
}
