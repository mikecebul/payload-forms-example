import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import { TanstackFormBlock } from './Form/component'

const blockComponents = {
  formBlock: TanstackFormBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][number][]
}> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="w-full my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
