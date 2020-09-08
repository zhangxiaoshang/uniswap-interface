import React from 'react'
import { Text } from 'rebass'
import { ExternalLink } from '../../theme'
import { ButtonPrimary } from '../Button'
import { OutlineCard } from '../Card'
import Column, { AutoColumn } from '../Column'
import { PaddedColumn } from './styleds'
import { useDarkModeManager } from '../../state/user/hooks'

import listLight from '../../assets/images/token-list/lists-light.png'
import listDark from '../../assets/images/token-list/lists-dark.png'

export default function ListIntroduction({ onSelectList }: { onSelectList: () => void }) {
  const [isDark] = useDarkModeManager()

  return (
    <Column style={{ width: '100%', flex: '1 1' }}>
      <PaddedColumn>
        <AutoColumn gap="14px">
          <img
            style={{ width: '120px', margin: '0 auto' }}
            src={isDark ? listDark : listLight}
            alt="token-list-preview"
          />
          <img
            style={{ width: '100%', borderRadius: '12px' }}
            src="https://cloudflare-ipfs.com/ipfs/QmRf1rAJcZjV3pwKTHfPdJh4RxR8yvRHkdLjZCsmp7T6hA"
            alt="token-list-preview"
          />
          <Text style={{ marginBottom: '8px', textAlign: 'center' }}>
            目前支持的代币列表。您可以通过IPFS、HTTPS和ENS添加您自己的代币列表.{' '}
          </Text>
          <ButtonPrimary onClick={onSelectList} id="list-introduction-choose-a-list">
            选择一个列表
          </ButtonPrimary>
          <OutlineCard style={{ marginBottom: '8px', padding: '1rem' }}>
            <Text fontWeight={400} fontSize={14} style={{ textAlign: 'center' }}>
              代币列表是一个 <ExternalLink href="https://github.com/uniswap/token-lists">开放式规范</ExternalLink>. 查看{' '}
              <ExternalLink href="https://tokenlists.org">tokenlists.org</ExternalLink> 了解更多.
            </Text>
          </OutlineCard>
        </AutoColumn>
      </PaddedColumn>
    </Column>
  )
}
