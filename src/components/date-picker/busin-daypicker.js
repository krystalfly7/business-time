import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '@components/form-item/form-item.js';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Popup from 'rmc-picker/lib/Popup';
import 'rmc-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
import { creatMonth, creatYear, creatData, creatNewColDay } from './util.js';

const now = new Date();
const colYear = creatYear(21);
const colMonth = creatMonth(12);
const colDay = creatNewColDay(now.getFullYear(), now.getMonth() + 1);

class BusinDayPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayValue: null,
      colDay: colDay
    };
  }

  componentDidMount() {
    //set default day
    this.setState({ dayValue: [0, now.getMonth(), now.getDate() - 1]});
  }

  onOk = (value) => {
    console.log(value)
    //convert day
    const dayStr = colYear[Number(value[0])].label + '-' + colMonth[Number(value[1])].label + '-' + colDay[Number(value[2])].label;
    console.log(dayStr);
    this.props.onClickItem(dayStr)
  }

  handleValueChange = (value) => {
    console.log(value)
    const _colDay = creatNewColDay(colYear[Number(value[0])].label, colMonth[Number(value[1])].label);
    console.log(_colDay)
    this.setState({ dayValue: value, colDay: _colDay });
  }

  render() {
    const { value } = this.props;
    return (
        <Popup
          className="fortest"
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          picker={<MultiPicker onValueChange={this.handleValueChange}>{[{props: {children: colYear}}, {props: {children: colMonth}}, {props: {children: this.state.colDay}}]}</MultiPicker>}
          title=""
          dismissText='取消'
          okText='确定'
          onDismiss={this.onDismiss}
          onOk={this.onOk}
          value={this.state.dayValue}
        >
        <div className='content-day'>{value? value : '请选择'}</div>
        </Popup>
    );
  }
}

BusinDayPicker.propTypes = {
  value: PropTypes.string,
  onClickItem: PropTypes.func,
}

export default BusinDayPicker;
