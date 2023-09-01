/*eslint-disable*/
import { Book } from '../generated/prisma/book';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BookRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findOne(id: number): Promise<Book> {
    return await this.prisma.book.findOne({ id });
  }

  async findMany(): Promise<Book[]> {
    return await this.prisma.book.findMany();
  }

  async create(book: Book): Promise<Book> {
    return await this.prisma.book.create(book);
  }
}
