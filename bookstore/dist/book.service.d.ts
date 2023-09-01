import { BookRepository } from './book.repository';
import { Book } from '../generated/prisma/book';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(): Promise<Book[]>;
    createBook(book: Book): Promise<Book>;
}
