/** @format */

import {ComponentType} from 'react'

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
    defaultProps: DP,
    Cmp: ComponentType<P>,
) => {
    // 提取必要属性
    type RequiredProps = Omit<P, keyof DP>
    type Props = Partial<DP> & Required<RequiredProps>

    Cmp.defaultProps = defaultProps

    return (Cmp as ComponentType<any>) as ComponentType<Props>
}
