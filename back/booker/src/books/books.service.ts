import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books } from './entities/book.entity';

@Injectable()
export class BooksService {
  
  private books: Books[]=[
    {id: 1, nome: 'Crime e Castigo', nota: 5}, 
    {id: 2, nome: 'Metamorfose', nota: 4}
  ]

  private idCounter = 3;

  create(createBookDto: CreateBookDto) {
    
    const newbook: Books = {
      id: this.idCounter++,
      ...createBookDto, 
    };

    this.books.push(newbook)
    return newbook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    
    const books = this.books.find((l) => l.id===id);
    if (!books) {
      throw new NotFoundException(`Livro com #${id} não encontrado`);
    }
    return books;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    
    const bookIndex = this.books.findIndex((l) => l.id===id);
    if (bookIndex===-1) {
      throw new NotFoundException(`Livro com #${id} não encontrado`);
    }
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updateBookDto,
    
    };
    return this.books[bookIndex];
  }

  remove(id: number) {
    
    const bookIndex = this.books.findIndex((l) => l.id===id);
    if (bookIndex===-1) {
      throw new NotFoundException(`Livro com #${id} não encontrado`);
    }

    const remove = this.books[bookIndex];
    this.books.splice(bookIndex, 1);
    return remove;
  }
}
