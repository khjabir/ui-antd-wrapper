/* eslint-disable react/forbid-prop-types */
import * as React from 'react'
import {
	FlagOutlined,
	UserOutlined,
	GoogleOutlined,
	CheckOutlined,
	CloseOutlined,
	CalendarOutlined,
	PlusOutlined,
	UndoOutlined,
	SearchOutlined,
	DeleteOutlined,
	EditOutlined,
} from '@ant-design/icons';
import * as PropTypes from 'prop-types';

/**
- Description here
*/

const icons = {
	FlagOutlined,
	UserOutlined,
	GoogleOutlined,
	CheckOutlined,
	CloseOutlined,
	CalendarOutlined,
	PlusOutlined,
	UndoOutlined,
	SearchOutlined,
	DeleteOutlined,
	EditOutlined,
};

const getIcon = ({
	name,
	className,
	style,
	rotate,
	spin,
}) => {
	if (name) {
		const Icon = icons[name];
		if (Icon) {
			return (
				<Icon
					className={className}
					style={style}
					rotate={rotate}
					spin={spin}
				/>
			);
		}
	}
	return null;
};

getIcon.propTypes = {
	name      : PropTypes.string.isRequired,
	className : PropTypes.string,
	style     : PropTypes.object,
	rotate    : PropTypes.bool,
	spin      : PropTypes.bool,
};

getIcon.defaultProps = {
	className : undefined,
	style     : {},
	rotate    : false,
	spin      : false,
};

export default getIcon;
