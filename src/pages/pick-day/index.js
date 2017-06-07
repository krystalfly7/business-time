import ReactDom from 'react-dom';
import React, { Component } from 'react';
import '@styles/init.less';
import './index.less';

const weekData = ['周一','周二','周三','周四','周五','周六','周日'];
class PickDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayList: []
    };
  }
  handleSelect = (index) => {
    console.log('handleSelect');
    const { dayList } = this.state;
    if(dayList.indexOf(weekData[index]) === -1) {
      dayList.push(weekData[index]);
    } else {
      let _index = dayList.findIndex(day => day === weekData[index]);
      dayList.splice(_index, 1);
    }
    this.setState({ dayList });
    //set local storage or subscribe event
  }

  render() {
    const { dayList } = this.state;
    return (
      <div className="container">
        <ul>
          {
        	  weekData.map((item, index) => {
              return (
                <li key={index}
                    className='dayItem'
                    onClick={() => this.handleSelect(index)}>
                    {item}
                    <span className={dayList.indexOf(item)!== -1 ? 'day-icon' : ''}></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default PickDay;
// ReactDom.render(<PickDay />, document.getElementById('app'));
