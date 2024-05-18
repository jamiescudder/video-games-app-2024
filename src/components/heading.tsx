import styled from 'styled-components'

interface HeadingProps {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
  id?: string
}

const Heading: React.FC<HeadingProps> = ({ children, as, color, id }) => {
  return (
    <HeadingItem as={as} color={color} id={id}>
      {children}
    </HeadingItem>
  )
}

export default Heading

const HeadingItem = styled.h1<HeadingProps>`
  color: ${({ color }) => color};
  font-size: var(--${({ as }) => as}-font-size);
  font-weight: 200;
`
