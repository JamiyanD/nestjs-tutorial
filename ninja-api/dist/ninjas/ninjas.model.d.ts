import { Prisma } from "@prisma/client";
export declare class Ninjas implements Prisma.NinjasCreateInput {
    name: string;
    password: string;
    username: string;
    email: string;
}
