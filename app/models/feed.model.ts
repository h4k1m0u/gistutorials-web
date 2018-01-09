import { Article } from './article.model';

export class Feed {
    count: number;
    next: string;
    previous: string;
    results: Article[];
}
