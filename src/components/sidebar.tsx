import React from 'react'
import Heading from 'video-games-app/components/heading'
import Text from 'video-games-app/components/text'
import Box from 'video-games-app/components/box'
import styled from 'styled-components'
import Stack from 'video-games-app/components/stack'

interface Props {
}

const PlatformSidebar: React.FC<Props> = () => {
  return (
    <Sidebar>
      <ItemList>
        <ListItem>Home</ListItem>
        <ListItem>Service</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </ItemList>
    </Sidebar>
  );
}
export default PlatformSidebar
const Sidebar = styled(Box)`
  background-color: dimgrey;
  position: fixed;
  height: 100%;
  width: 250px;
  //background-color: #f4f4f4;
  padding: 20px 10px 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

const ItemList = styled(Stack)`
  display: flex;
  flex-direction: column;
`

const ListItem = styled(Text)`
  &:hover {
    color: crimson;
  }
`
