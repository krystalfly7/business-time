/**
 * Created by madlord on 16/5/4.
 */
import React from 'react';
import ReactDom from 'react-dom';
// import Test from './index.jsx';
import Test from './test-action.js';
var _ins;
class BootLoader  {
    constructor (props) {
        if (!_ins) {
            _ins=this;
        }
        return _ins;
    }

    static getInstance() {
        if (!_ins) {
            _ins=new BootLoader();
        }
        return _ins;
    }

    init() {
        ReactDom.render(<Test />, document.getElementById('app'));
    }
}

BootLoader.getInstance().init();
