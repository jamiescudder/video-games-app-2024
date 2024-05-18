import styled from 'styled-components'

import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  BorderProps,
  FlexboxProps,
  DisplayProps,
  ColorProps,
  space,
  layout,
  color,
  position,
  typography,
  border,
  flexbox,
  display,
} from 'styled-system'

export interface CustomLayoutProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    TypographyProps,
    BorderProps,
    FlexboxProps,
    DisplayProps {}

const Box = styled.div<CustomLayoutProps>`
  ${layout}
  ${space}
  ${color}
  ${position}
  ${typography}
  ${border}
  ${flexbox}
  ${display}
`

export default Box
