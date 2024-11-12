import { Controller, Get, Post, Body, Render, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { Response } from 'express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() articleData: Partial<Article>, @Res() res: Response) {
    await this.articlesService.create(articleData);
    const articles = await this.articlesService.findAll();
    return res.render('index', { articles });
  }

  @Get()
  @Render('index')
  async findAll() {
    const articles = await this.articlesService.findAll();
    return { articles };
  }
}
