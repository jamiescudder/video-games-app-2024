import React from 'react'
import { Inter } from "next/font/google";
import Heading from 'video-games-app/components/heading'
import Text from 'video-games-app/components/text'
import Stack from 'video-games-app/components/stack'
import Box from 'video-games-app/components/box'
import styled from 'styled-components'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: any
}

const Test: React.FC<Props> = (data: Props) => {
  console.log(data)
  return (
    <TestStack>
      <Box
        display='flex'
        flexDirection='column'
      >
        <Heading
          as='h1'
        >
          This is a test
        </Heading>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
      >
        <Text
          color={'var(--red)'}
        >
          This is an example
        </Text>
        <Text
          color={'var(--red)'}
        >
          This is an example
        </Text>
        <Text
          color={'var(--red)'}
        >
          This is an example
        </Text>
        <Text
          color={'var(--red)'}
        >
          This is an example
        </Text>
        <Text
          color={'var(--red)'}
        >
          This is an example
        </Text>
      </Box>
    </TestStack>
  );
}
export default Test

export const getStaticProps: GetStaticProps = async () => {
  const fetchUrl: string = `https://jsonplaceholder.typicode.com/todos/1`

  try {
    const homepageCmsFetch = await fetch(fetchUrl)
    const homepageCmsData = (await homepageCmsFetch.json()) as any

    return {
      props: {
        data: homepageCmsData,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      notFound: true,
      revalidate: 30,
    }
  }
}

const TestStack = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
