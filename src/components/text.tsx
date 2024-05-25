import React from 'react'
import styled from 'styled-components'
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  BorderProps,
  ColorProps,
  space,
  layout,
  position,
  typography,
  border,
  color,
} from 'styled-system'

export interface Props
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    TypographyProps,
    BorderProps,
    ColorProps {
  children?: React.ReactNode
}

const Text = styled.p<Props>`
  font-size: var(--p-font-size);
  line-height: 1.5;

  ${layout}
  ${space}
  ${position}
  ${typography}
  ${border}
  ${color}
`
export default Text
