import React from 'react';
import PropTypes from 'prop-types';
import './form-item.less';

class FormItem extends React.Component {
    render() {
        return (
            <div className="form-item">
                <div className={`${this.props.classItem || ''} form-value`}>
                    <label className="form-label">
                        {this.props.label}<span>{this.props.subLabel}</span>
                    </label>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

FormItem.propTypes = {
  classItem: PropTypes.string
}

export default FormItem;