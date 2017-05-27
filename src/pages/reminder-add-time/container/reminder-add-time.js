import React, { Component } from 'react';
import './../index.less';
import '@styles/init.less';
import '@styles/button.less';

class ReminderAddTime extends Component {
  render() {
    return (
      <div className="container">
        <div className="noTime">
            <div className="sub">点击添加按钮</div>
            <div className="sub">快去添加你的营业时间!</div>
            <ul>
                <li>支持多种时间方案设置</li>
                <li>完整地营业时间可提高门店曝光率</li>
                <li>增加顾客好感度减少空跑率</li>
            </ul>
        </div>
        <div className="btnBlock">
            <a href="javascript:;" className="submitBtn">添加</a>
        </div>
    </div>
    );
  }
}

export default ReminderAddTime;
