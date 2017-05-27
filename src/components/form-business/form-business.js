import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from './../form-item/form-item.js';
import RowItem from './../row-item/row-item.js';
import './form-business.less';
const businessList1 = ['早市','午市','晚市']
const businessList2 = ['早午餐','夜宵','下午茶']

class FormBusiness extends Component {

  render() {
    const { businTime, businPeriod, showDelText } = this.props;
    return (
        <div>
            <RowItem
              label='营业时段'
              value={showDelText? '删除': ''}
              classItem='border-bm'
              onClickItem={showDelText? this.props.onClickDelForm : null} />
            <RowItem 
              label='营业时间'
              value={businTime}
              hasArrow={true}
              classItem='border-bm'
              onClickItem={this.props.onClickBusinTime} />
            <FormItem label='时段名称(可选)' classItem='business-panel'>
              <div className='business-list'>
                {
                  businessList1.map((item, index) => {
                    return (
                      <div 
                        key={index}
                        className={businPeriod === item? 'list-item active' : 'list-item'}
                        onClick={() => this.props.onClickTimePeriod(item)}>
                        {item}
                      </div>
                    )
                  })
                }
              </div>
              <div className='business-list'>
                {
                  businessList2.map((item, index) => {
                    return (
                      <div 
                        key={index}
                        className={businPeriod === item? 'list-item active' : 'list-item'}
                        onClick={() => this.props.onClickTimePeriod(item)}>
                        {item}
                      </div>
                    )
                  })
                }
              </div>
            </FormItem>
        </div>
    );
  }
}

FormBusiness.propTypes = {
  businTime: PropTypes.string,
  businPeriod: PropTypes.string,
  showDelText: PropTypes.bool,
  onClickDelForm: PropTypes.func,
  onClickBusinTime: PropTypes.func,
  onClickTimePeriod: PropTypes.func,
}

export default FormBusiness;
