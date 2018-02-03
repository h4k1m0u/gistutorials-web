export class Tag {
    id: number;
    name: string;
    slug: string;
}

export class Article {
    id: number;
    title: string;
    text: string;
    date: string;
    tags: Tag[];
    slug: string;
}
