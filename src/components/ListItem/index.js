import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'noopener noreferrer nofollow'
const ListItem = () => {
  return (
    <Item>
      <ExternalLink>
        <Title>The Developer Community</Title>
        <Host>(cloudsckale.com)</Host>
      </ExternalLink>
      <Description>
        900 points by {' '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          Test User
        </CommentLink>
        1 Hour Ago
        {' | '}
        <CommentLink href="#" rel={LINK_REL} target="_blank">
          42 Comments
        </CommentLink>
      </Description>
    </Item>
  )
}

export default ListItem;
