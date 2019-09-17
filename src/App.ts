/**
 * /*
 *
 * @format
 * @Description: App
 * @Author: 执念
 * @Date: 2019-09-04 18:46:17
 * @LastEditTime: 2019-09-17 11:45:43
 * @LastEditors: Please set LastEditors
 */

import * as ReactDOM from 'react-dom'
import * as React from 'react'
import {Main} from './main'

import './styles/global.sass'
import 'antd/dist/antd.css'

export class App {
    constructor() {
        this.render()
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main), document.getElementById('root'))
    }
}

new App()
