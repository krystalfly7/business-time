import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '@components/form-item/form-item.js';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Popup from 'rmc-picker/lib/Popup';
import 'rmc-picker/assets/index.css';
import 'rmc-picker/assets/popup.css';
import { creatData } from './util.js';

const colHour = creatData(24);
const symbolColon = [{ label: ':', value: 0 }];
const colMin = [{ label: '00', value: 0 }, { label: '30', value: 1 }];
const symbolDash = [{ label: '-', value: 0 }];
class BusinTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeValue: null,
    };
  }

  componentDidMount() {
    const { value } = this.props;
    //set dedault time
    if(value && value.indexOf('-')){
      const _timeValue = [0, 0, 0, 0, 0, 0, 0];
      _timeValue[0] = parseInt(value.substr(0, 2));
      _timeValue[2] = parseInt(value.substr(3, 2)) === 0 ? 0: 1;
      _timeValue[4] = parseInt(value.substr(6, 2));
      _timeValue[6] = parseInt(value.substr(9, 2)) === 0 ? 0: 1;
      this.setState({ timeValue: _timeValue});
    }
  }

  onOk = (value) => {
    this.setState({timeValue: value});
    //convert time
    const timeStr = colHour[Number(value[0])].label + ':' + colMin[Number(value[2])].label + '-' + colHour[Number(value[4])].label + ':' + colMin[Number(value[6])].label;
    console.log(timeStr);
    this.props.onClickItem(timeStr);
  }

  render() {
    const { label, value, classItem, hasArrow } = this.props;
    return (
      <FormItem label={label} classItem={classItem}>
        <Popup
          className="fortest"
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          picker={<MultiPicker>{[{props: {children: colHour}}, {props: {children: symbolColon}}, {props: {children: colMin}}, {props: {children: symbolDash}}, {props: {children: colHour}}, {props: {children: symbolColon}}, {props: {children: colMin}}]}</MultiPicker>}
          title=""
          dismissText='取消'
          okText='确定'
          onDismiss={this.onDismiss}
          onOk={this.onOk}
          value={this.state.timeValue}
        >
        <div>
          <div className="form-content">
            {value}
          </div>
          <div className={hasArrow? "arrow-right" : ''}>
          </div>
        </div>
        </Popup>
      </FormItem>
    );
  }
}

BusinTimePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  classItem: PropTypes.string,
  hasArrow: PropTypes.bool,
  onClickItem: PropTypes.func,
}

export default BusinTimePicker;
