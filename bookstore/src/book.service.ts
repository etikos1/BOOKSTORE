/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { Book } from '../generated/prisma/book';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks() {
    return await this.bookRepository.findMany();
  }

  async createBook(book: Book) {
    const newBook = await this.bookRepository.create(book);
    return newBook;
  }
}