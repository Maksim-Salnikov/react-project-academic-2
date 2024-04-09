import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { ArticleDetailsRecommendetSchema } from './ArticleDetailsRecommendetSchema'

export interface ArticleDetailPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendetSchema
}
