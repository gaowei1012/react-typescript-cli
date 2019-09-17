import React, { Component, MouseEvent, SFC, ReactNode, ComponentType } from 'react';
import { isFunction } from '../../../utils';
// 定义state初始值
const initState = { show: false };
//const defaultProps = { props: {} as { [name: string]: any } };

type State = Readonly<typeof initState>;
// 定义props，其是可选参数
// type Props = Partial<{
//   children: RenderCallback | ReactNode;
//   render: RenderCallback;
//   component: ComponentType<ToggleableComponentProps<any>>;
// } & DefaultProps>;

// 使用泛型改善组件安全类型检查
export type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<P>>;
  } & DefaultProps<P>
>;

type DefaultProps<P extends object = object> = { props: P };
const defaultProps: DefaultProps = { props: {} };

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

export type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable['toggle'];
} & P;

export class Toggleable<T = {}> extends Component<Props, State> {
  static ofType<T extends object>() {
    //return Toggleable as Constructor<Toggleable<T>>;
  }

  static readonly defaultProps: Props = defaultProps;
  readonly state: State = initState;

  render() {
    const { component: InjectedComponent, props, children, render } = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle
    };

    if (InjectedComponent) {
      <InjectedComponent {...props} {...renderProps}>
        {children}
      </InjectedComponent>;
    }

    if (render) {
      return render(renderProps);
    }
    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState);
}

const updateShowState = (prevState: State) => ({
  show: !prevState.show
});
