import { BookService } from './book.service';
import { Book } from '../generated/prisma/book';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<Book[]>;
    createBook(book: Book): Promise<Book>;
}
