import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from './../form-item/form-item.js';
import './radio-item.less';

class RadioItem extends Component {
  render() {
    const { value } = this.props;
    return (
        <FormItem label='时段' classItem='mb-10'>
            <div className="form-content">
                    <div className="radio-item">
                        <i className={"checkbox "+(value==0?"checked":"")}
                           onClick={()=>{this.props.onChange(0)}}></i>
                        <span>营业时段</span>
                    </div>
                    <div className="radio-item">
                        <i className={"checkbox "+(value==1?"checked":"")}
                           onClick={()=>{this.props.onChange(1)}}></i>
                        <span>非营业时段</span>
                    </div>
                </div>
        </FormItem>
    );
  }
}

RadioItem.propTypes = {
  value: PropTypes.number
}

export default RadioItem;
