import { Article, Tag } from './article.model';

export class ArticlesFeed {
    count: number;
    next: string;
    previous: string;
    results: Article[];
}

export class TagsFeed {
    count: number;
    next: string;
    previous: string;
    results: Tag[];
}
