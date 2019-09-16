// import React, {ComponentType, Component} from 'react'
// import {
//   Toggleable,
//   Props as ToggleablePrpps,
//   ToggleableComponentProps
// } from '../components/Toggleable/Toggleable'
// import {getHocComponentName} from '../utils/index'
// import hoistNonReactStatics = require('hoist-non-react-statics');

// // 使用OwnOrops 在组件内上任意公开属性
// type OwnProps = object
// type InjectedProps = ToggleableComponentProps

// export const withToggleable = <OriginProps extends object>(
//   UnwrappedComponent: ComponentType<OriginProps & InjectedProps>
// ) => {
//   // Omit 取得最终的属性类型
//   type Props = Omit<OriginProps, keyof InjectedProps> & OwnProps;

//   // 定义组件
//   class withToggleable extends Component<Props> {
//     static readonly displayName = getHocComponentName(
//       withToggleable.displayName,
//       UnwrappedComponent
//     );

//     static readonly UnwrappedComponent = UnwrappedComponent;

//     render() {
//       const {...rest} = this.props;
//       return (
//         <Toggleable
//           render={renderProps => (
//             <UnwrappedComponent {...rest} {...renderProps}/>
//           )}
//         />
//       )
//     }
//   }

//   return hoistNonReactStatics(withToggleable, UnwrappedComponent)
// }
