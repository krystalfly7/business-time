import ReactDom from 'react-dom';
import React, { Component } from 'react';
import RowItem from	'@components/row-item/row-item.js';
import '@styles/init.less';


class NoneBusiness extends Component {

  render() {
    const { startDay, endDay } = this.props;
    return (
      <div className="container">
        <div className='mb-10 none-busin'>
          <div className="busin-label">
              非营业日期 
          </div>
          <div className='busin-content'>
            <div className='content-title'>开始日期</div>
            <div className='content-title'>结束日期</div>
          </div>
          <div className='busin-content'>
            <div className='content-day'>请选择</div>
            <div className='content-day'>请选择</div>
          </div>
        </div>
      	<RowItem
          label='非营业时间'
          value='08:00-18:00'
          hasArrow={true}
          classItem='mb-10'
          onClickItem={this.handleBusnDay} />
    </div>
    );
  }
}

export default NoneBusiness;