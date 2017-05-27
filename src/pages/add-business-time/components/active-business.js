import ReactDom from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowItem from	'@components/row-item/row-item.js';
import RadioItem from	'@components/radio-item/radio-item.js';
import FormBusiness from '@components/form-business/form-business.js';
import '@styles/button.less';
import '@styles/init.less';


class ActiveBusiness extends Component {

  renderFormBusiness = () => {
    return (
      <div>
        {
          this.props.formBusinNum.map((item, index) => {
            return (
              <FormBusiness
                key={index}
                showDelText={index!==0? true: false}
                businTime={item.businTime}
                businPeriod={item.businPeriod}
                onClickDelForm={() => this.props.handleDelFormBusin(index)}
                onClickBusinTime={() => this.props.handleChangeBusinTime(index)}
                onClickTimePeriod={(data) => this.props.handleChangeTimePeriod(index, data)} />
            )
          })
        }
        <div className="add-time">
          <span onClick={this.props.handleAddFormBusin}>
              <span className='add-more'></span>添加营业时间
          </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
      	<RowItem
          label='每年营业季'
          value='全年'
          hasArrow={true}
          classItem='mb-10'
          onClickItem={this.props.handleBusnSeason} />
      	<RowItem
          label='每周营业日'
          value='周一至周五'
          hasArrow={true}
          classItem='mb-10'
          onClickItem={this.props.handleBusnDay} />
        {this.renderFormBusiness()}
      </div>
    );
  }
}

ActiveBusiness.propTypes = {
  handleBusnDay: PropTypes.func,
  handleBusnSeason: PropTypes.func,
  handleChangeTimePeriod: PropTypes.func,
  handleChangeBusinTime: PropTypes.func,
  handleDelFormBusin: PropTypes.func,
  handleAddFormBusin: PropTypes.func
}
export default ActiveBusiness;

