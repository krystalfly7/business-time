import ReactDom from 'react-dom';
import React, { Component } from 'react';
import '@styles/init.less';
import './index.less';

const seasonList = ['春季 (3月-5月)', '夏季 (6月-8月)', '秋季 (9月-11月)', '冬季 (12月-次年2月)'];
class SelectSeason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0, // '全年0, 分季节1'
      season: []
    };
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

  render() {
    const { status, season } = this.state;
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
        {
          this.state.status === 1?
          <ul className='season-list'>
            {
              seasonList.map((item, index) => {
                return (
                  <li key={index}>
                    <i className={season.indexOf(item)!== -1 ? 'checkbox checked' : 'checkbox'}
                      onClick={() => this.handleSelectSeason(index)}></i>
                    <span>{item}</span>
                  </li>
                )
              })
            }
          </ul> : null
        }
    </div>
    );
  }
}

ReactDom.render(<SelectSeason />, document.getElementById('app'));

