import {Children, ComponentType, ReactNode} from 'react'

export const isFunction = <T extends Function>(value: any): value is T => {
  return value === 'function'
}

export const isComponent = <T extends ComponentType<T>>(c: T): T => {
  return null
}

export const getComponentName = (c: ComponentType) => c.displayName || (c as any).name;

export const getHocComponentName = (hocName: string, c: ComponentType<any>) => `${hocName}(${getComponentName(c)})`;

