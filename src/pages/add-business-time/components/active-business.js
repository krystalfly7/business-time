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
                label={'营业时段' + `${index + 1}`}
                showDelText={index!==0? true: false}
                businTime={item.businTime}
                businPeriod={item.businPeriod}
                onClickDelForm={() => this.props.delFormBusin(index)}
                onClickBusinTime={(time) => this.props.onBusinTime(index, time)}
                onClickTimePeriod={(data) => this.props.onTimePeriod(index, data)} />
            )
          })
        }
        <div className="add-time">
          <span onClick={this.props.addFormBusin}>
              <span className='add-more'></span>添加营业时间段
          </span>
        </div>
      </div>
    )
  }

  render() {
    const { seasonStatus, selectedSeason, day, onBusinSeason, onBusinDay } = this.props;
    return (
      <div className="container">
      	<RowItem
          label='每年营业季'
          value={seasonStatus===0? '全年': selectedSeason? selectedSeason.join(';') : ''}
          hasArrow={true}
          classItem='mb-10'
          onClickItem={onBusinSeason} />
      	<RowItem
          label='每周营业日'
          value={day}
          hasArrow={true}
          // classItem='mb-10'
          onClickItem={onBusinDay} />
        {this.renderFormBusiness()}
      </div>
    );
  }
}

ActiveBusiness.propTypes = {
  seasonStatus: PropTypes.number,
  selectedSeason: PropTypes.array,
  day: PropTypes.string,
  onBusinDay: PropTypes.func,
  onBusinSeason: PropTypes.func,
  onTimePeriod: PropTypes.func,
  onBusinTime: PropTypes.func,
  delFormBusin: PropTypes.func,
  addFormBusin: PropTypes.func
}
export default ActiveBusiness;

