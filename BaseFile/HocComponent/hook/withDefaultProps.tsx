import { ComponentType } from "react";

export const withDefaultProps = <
  // props 
  P extends object,
  // defaultprops
  DP extends Partial<P> = Partial<P>
  >(defaultProps: DP, Cmp: ComponentType<P>) => {

  // 提取必要属性
  type RequiredProps = Omit<P, keyof DP>;
   // 重新创建我们的属性定义，通过一个相交类型，将所有的原始属性标记成可选的，必选的属性标记成可选的
  type Props = Partial<DP> & Required<RequiredProps>;

  Cmp.defaultProps = defaultProps;

  return (Cmp as ComponentType<any> as ComponentType<Props>);
}
