/* eslint-disable react/forbid-prop-types */
import { Skeleton } from 'antd';
import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
- Description here
*/

const DTSkeleton = ({
	rows,
	loading,
	avatar,
	title,
}) => (
	<Skeleton
		active
		paragraph={{
			rows,
		}}
		loading={loading}
		avatar={avatar}
		title={title}
	/>
);

DTSkeleton.propTypes = {
	loading : PropTypes.bool.isRequired,
	rows    : PropTypes.number,
	avatar  : PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			active : PropTypes.bool,
			size   : PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.oneOf(['large', 'small', 'default']),
			]),
			shape : PropTypes.oneOf(['circle', 'square']),
		}),
	]),
	title : PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			width : PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.string,
			]),
		}),
	]),
};

DTSkeleton.defaultProps = {
	rows   : 5,
	avatar : false,
	title  : true,
};

export default DTSkeleton;
