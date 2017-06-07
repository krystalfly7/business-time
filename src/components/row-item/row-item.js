import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from '@components/form-item/form-item.js';

class RowItem extends Component {

  render() {
    const { label, value, classItem, hasArrow } = this.props;
    return (
        <FormItem label={label} classItem={classItem}>
          <div onClick={this.props.onClickItem}>
            <div className="form-content">
                {value}
            </div>
            {this.props.children}
            <div className={hasArrow? "arrow-right" : ''}>
            </div>
          </div>
        </FormItem>
    );
  }
}

RowItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  classItem: PropTypes.string,
  hasArrow: PropTypes.bool,
  onClickItem: PropTypes.func
}

export default RowItem;
