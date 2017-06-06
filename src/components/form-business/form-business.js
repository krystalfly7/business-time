import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '@components/form-item/form-item.js';
import RowItem from '@components/row-item/row-item.js';
import BusinTimePicker from '@components/date-picker/busin-timepicker.js';
import './form-business.less';
const businessList1 = ['早市','午市','晚市'];
const businessList2 = ['早午餐','夜宵','下午茶'];

class FormBusiness extends Component {

  renderBusinessList = (data) => {
    return (
      <div className='business-list'>
        {
          data.map((item, index) => {
            return (
              <div 
                key={index}
                className={this.props.businPeriod === item? 'list-item active' : 'list-item'}
                onClick={() => this.props.onClickTimePeriod(item)}>
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    const { label, businTime, showDelText } = this.props;
    return (
        <div>
            <RowItem
              label={label}
              // value={showDelText? '删除': ''}
              classItem='back-color'
              onClickItem={showDelText? this.props.onClickDelForm : null} />
            <BusinTimePicker
              label='营业时间'
              value={businTime}
              hasArrow={true}
              classItem='border-bm'
              onClickItem={this.props.onClickBusinTime}
            />
            <FormItem label='时段名称' subLabel='(可选)' classItem='business-panel'>
              {this.renderBusinessList(businessList1)}
              {this.renderBusinessList(businessList2)}
            </FormItem>
            {
              showDelText ?
              <div className='del-business'>
                <span onClick={this.props.onClickDelForm}>
                  删除时段
                </span>
              </div> : null
            }
        </div>
    );
  }
}

FormBusiness.propTypes = {
  label: PropTypes.string,
  businTime: PropTypes.string,
  businPeriod: PropTypes.string,
  showDelText: PropTypes.bool,
  onClickDelForm: PropTypes.func,
  onClickBusinTime: PropTypes.func,
  onClickTimePeriod: PropTypes.func,
}

export default FormBusiness;
