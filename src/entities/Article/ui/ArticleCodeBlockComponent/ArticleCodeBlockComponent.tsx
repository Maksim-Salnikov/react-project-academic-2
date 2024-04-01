import { memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { block } = props

    return (
      <div>
        <Code text={block.code} />
      </div>
    )
  },
)
