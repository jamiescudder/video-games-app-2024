import React from 'react'
import Heading from 'video-games-app/components/heading'
import Text from 'video-games-app/components/text'
import Box from 'video-games-app/components/box'
import styled from 'styled-components'
import Stack from 'video-games-app/components/stack'

interface Props {
}

const PlatformTopBar: React.FC<Props> = () => {
  return (
    <TopBar>
      <Box
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Heading as="h4" color="white">Video Games App</Heading>
      </Box>
    </TopBar>
  );
}
export default PlatformTopBar
const TopBar = styled(Box)`
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  //background-color: #f4f4f4;
`
