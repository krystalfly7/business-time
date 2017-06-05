import ReactDom from 'react-dom';
import React, { Component } from 'react';
import Dialog from '@components/dialog/dialog.js';
import '@styles/init.less';
import '@styles/button.less';
import './index.less';

const seasonList = ['春季 (3月-5月)', '夏季 (6月-8月)', '秋季 (9月-11月)', '冬季 (12月-次年2月)'];
class SelectSeason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultStatus: null, //remeber default status for dialog
      status: 0, // '全年0, 分季节1'
      showDialog: false,
      season: []
    };
  }

  componentDidMount() {
    //get database season data
    //if 全年 status=0, 分季节 status=1
    //for test
    const data = {
      status: 1,
      season: ['春季 (3月-5月)', '秋季 (9月-11月)']
    };
    this.setState({ defaultStatus: data.status, status: data.status, season: data.season }); 
  }

  handleSelectStatus = (data) => {
    this.setState({status: data});
  }

  handleSelectSeason = (index) => {
    const { season } = this.state;
    if(season.indexOf(seasonList[index]) === -1) {
      season.push(seasonList[index]);
    } else {
      const _index = season.findIndex(item => item === seasonList[index]);
      season.splice(_index, 1);
    }
    this.setState({ season });
  }

  handleSubmitSeason = () => {
    if(this.state.status !== this.state.defaultStatus) {
      this.setState({ showDialog: true });
    } else {
      console.log('submit season data');
    }
  }

  handleOkDialog = () => {
    this.setState({ showDialog: false });
  }

  handleCancelDialog = () => {
    this.setState({ showDialog: false });
  }

  renderSeasonList = () => {
    if(this.state.status === 1) {
      return (
        <ul className='season-list'>
          {
            seasonList.map((item, index) => {
              return (
                <li key={index}>
                  <i className={this.state.season.indexOf(item)!== -1 ? 'checkbox checked' : 'checkbox'}
                    onClick={() => this.handleSelectSeason(index)}></i>
                  <span>{item}</span>
                </li>
              )
            })
          }
        </ul>
      );
    }
    return null;
  }

  renderDialog = () => {
    if(this.state.showDialog) {
      return (
        <Dialog
          header={'选择' + `${status===0? '全年' : '分季节'}` + '设置营业时间'}
          okText='确认'
          cancelText='取消'
          okClick={this.handleOkDialog}
          cancelClick={this.handleCancelDialog}
        >
          <div className='dialog-text'>
            按{status===0? '全年' : '分季节'}设置营业时间将<span className='color-text'>清除</span>之前{defaultStatus===0? '全年' : '分季节'}设置的营业时间
          </div>
        </Dialog>
      );
    }
    return null;
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container">
        <ul>
          <li className='border-bm'>
            <i className={"checkbox "+(status==0?"checked":"")}
                onClick={() => this.handleSelectStatus(0)}></i>
            <span>全年</span>
          </li>
          <li>
            <i className={"checkbox "+(status==1?"checked":"")}
                onClick={() => this.handleSelectStatus(1)}></i>
            <span>分季节设置</span>
          </li>
        </ul>
        {this.renderSeasonList()}
        <div className="btnBlock">
            <a href="javascript:;" className="submitBtn" onClick={this.handleSubmitSeason}>确定</a>
        </div>
        {this.renderDialog()}
    </div>
    );
  }
}

ReactDom.render(<SelectSeason />, document.getElementById('app'));

