import ReactDom from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BusinTimePicker from '@components/date-picker/busin-timepicker.js';
import BusinDayPicker from '@components/date-picker/busin-daypicker.js';
import '@styles/init.less';


class NoneBusiness extends Component {

  render() {
    const { startDay, endDay, businTime } = this.props;
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
            <BusinDayPicker
              value={startDay}
              onClickItem={this.props.onBusinStartDay} />
            <BusinDayPicker
              value={endDay}
              onClickItem={this.props.onBusinEndDay} />
          </div>
        </div>
      	<BusinTimePicker
          label='非营业时间'
          value={businTime}
          hasArrow={true}
          classItem='mb-10'
          onClickItem={this.props.onBusinTime} />
    </div>
    );
  }
}

NoneBusiness.propTypes = {
  startDay: PropTypes.string,
  endDay: PropTypes.string,
  businTime: PropTypes.string,
  onBusinStartDay: PropTypes.func,
  onBusinEndDay: PropTypes.func,
  onBusinTime: PropTypes.func
}

export default NoneBusiness;