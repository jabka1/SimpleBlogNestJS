import { Controller, Get, Render } from '@nestjs/common';
import { ArticlesService } from './articles/articles.service';

@Controller()
export class AppController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @Render('index')
  async root() {
    const articles = await this.articlesService.findAll();
    return { articles };
  }
}
