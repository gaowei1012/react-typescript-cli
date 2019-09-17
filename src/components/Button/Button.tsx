/** @format */

import React, {MouseEvent, SFC} from 'react'
import {withDefaultProps} from '../../utils/withDefaultProps'

const defaultProps = {
    color: 'red',
}

type DefaultProps = typeof defaultProps
type Props = {
    onClick(e: MouseEvent<HTMLElement>): void
    children?: string
    color?: string
} & DefaultProps

const MButton: SFC<Props> = ({onClick: handleClick, children}) => (
    <button onClick={handleClick ? handleClick : undefined}>{children}</button>
)

const ButtonWithDefaultProps = withDefaultProps(defaultProps, MButton)

export default ButtonWithDefaultProps
export {ButtonWithDefaultProps}
