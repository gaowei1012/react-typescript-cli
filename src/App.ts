/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 18:46:17
 * @LastEditTime: 2019-09-16 22:17:25
 * @LastEditors: Please set LastEditors
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import ExRouter from './routes/router';
import { Main } from './main'

import './styles/global.sass';
import 'antd/dist/antd.css';

export class App {
    constructor(){
        this.render();
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main), document.getElementById("root"));
    }
}

new App();