import React, {MouseEvent, SFC} from 'react'
import { withDefaultProps } from '../../HocComponent/hook/withDefaultProps'

const defaultProps = {
  color: 'red'
}

type DefaultProps = typeof defaultProps
type Props = { 
  onClick(e: MouseEvent<HTMLElement>): void,
  children?: string,
  color?: string
} & DefaultProps

const Button: SFC<Props> = ({onClick: handleClick, children}) => (
  <button onClick={handleClick ? handleClick : undefined}>{children}</button>
);

const ButtonWithDefaultProps = withDefaultProps(defaultProps, Button) 

export default ButtonWithDefaultProps;
