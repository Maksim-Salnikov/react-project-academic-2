export enum ArticleBlockType {
  CODE = 'code',
  IMAGE = 'image',
  TEXT = 'text',
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export type AtricleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock

export enum ArticleType {
  IT = 'it',
  SCIENCE = 'science',
  ECONOMICS = 'economics',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: AtricleBlock[]
}
