import { Book } from '../generated/prisma/book';
import { PrismaClient } from '@prisma/client';
export declare class BookRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findOne(id: number): Promise<Book>;
    findMany(): Promise<Book[]>;
    create(book: Book): Promise<Book>;
}
