import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import Box from 'video-games-app/components/box'
import Heading from 'video-games-app/components/heading'
import Text from 'video-games-app/components/text'
import Stack from 'video-games-app/components/stack'
import {
  mdiMicrosoftWindows,
  mdiMicrosoftXbox,
  mdiPlusBox,
  mdiSonyPlaystation,
  mdiSteam
} from '@mdi/js'


const GameCard = () => {
  return (
    <Card>
      <CardImage src="https://via.placeholder.com/300x200" alt="Card image" />
      <CardContent>
        <Stack>
          <IconContainer>
            <Icon
              path={mdiMicrosoftWindows}
              size={1}
              color="white"
            />
            <Icon
              path={mdiSteam}
              size={1}
              color="white"
            />
            <Icon
              path={mdiSonyPlaystation}
              size={1}
              color="white"
            />
            <Icon
              path={mdiMicrosoftXbox}
              size={1}
              color="white"
            />
          </IconContainer>
          <Box
            display={'flex'}
            justifyContent={'center'}
          >
            <Heading as={'h4'}>Card Title</Heading>
          </Box>
          <Box
            display={'flex'}
          >
            <Box
              display={'flex'}
              backgroundColor={'grey'}
              padding='3px'
              borderRadius='5px'
            >
              <Icon
                path={mdiPlusBox}
                size={1}
                color="white"
              />
              <Text paddingX={'2px'}>3.279</Text>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default GameCard

const Card = styled(Box)`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const CardContent = styled(Box)`
  padding: 16px;
`

const IconContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`
