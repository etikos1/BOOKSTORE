/*eslint-disable*/
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from '../generated/prisma/book';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return await this.bookService.getAllBooks();
  }

  @Post()
  async createBook(@Body() book: Book) {
    return await this.bookService.createBook(book);
  }
}