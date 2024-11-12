import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  create(articleData: Partial<Article>): Promise<Article> {
    const article = this.articleRepository.create(articleData);
    return this.articleRepository.save(article);
  }

  findAll(): Promise<Article[]> {
    return this.articleRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }
}
