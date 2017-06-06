import ReactDom from 'react-dom';
import React, { Component } from 'react';
import FormItem from	'@components/form-item/form-item.js';
import '@styles/init.less';
import '@styles/button.less';

const data = [{
  businSeason: '全年',
  businDay: '周一至周五',
  businStatus: '营业',
  businPeriod: '早市',
  businTime: '08:00-10:00'
},
{
  businSeason: '全年',
  businDay: '周六',
  businStatus: '营业',
  businPeriod: '',
  businTime: '08:00-10:00'
},
{
  businSeason: '全年',
  businDay: '周六',
  businStatus: '非营业',
  businPeriod: '夜宵',
  businTime: '18:00-24:00'
},
{
  businSeason: '全年',
  businDay: '周日',
  businStatus: '营业',
  businPeriod: '全天',
  businTime: '00:00-24:00'
}];

class BusinessTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount () {
    //get database remote data
    //for test
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        {
          data && Array.isArray(data) ?
          data.map((item, index) => {
            return (
              <div className='busin-form' key={index}>
                <div className="busin-content">
                  <label>
                    {item.businSeason}  {item.businDay} 
                  </label>
                  <div className={item.businStatus === '营业'? 'active' : 'none-active'}>
                    {item.businStatus}
                  </div>
                </div>
                <div className='busin-subcontent'>
                  {item.businPeriod}  {item.businTime}
                </div>
              </div>
            )
          }) : null
        }
        <div className="btnBlock">
            <a href="javascript:;" className="submitBtn">添加</a>
        </div>
      </div>
    );
  }
}

ReactDom.render(<BusinessTime />, document.getElementById('app'));
