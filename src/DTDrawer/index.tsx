/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { Drawer } from 'antd';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import DTEmpty from '../DTEmpty';
import DTSkeleton from '../DTSkeleton';

/**
- Description here
*/

const DTDrawer = ({
	title,
	placement,
	visible,
	width,
	height,
	maskClosable,
	zIndex,
	className,
	style,
	loading,
	error,
	noData,
	children,
	getContainer,
	skeletonProps,
	onClose,
}) => {
	const displayDrawerChildren = () => {
		if (error) return <DTEmpty description={error} />;
		if (noData) return <DTEmpty description={noData} />;
		if (loading) return <DTSkeleton loading={loading} {...skeletonProps} />;
		return children;
	};
	return (
		<Drawer
			title={title}
			placement={placement}
			closable
			onClose={onClose}
			visible={visible}
			width={width}
			height={height}
			maskClosable={maskClosable}
			destroyOnClose
			zIndex={zIndex}
			className={className}
			style={style}
			getContainer={getContainer}
		>
			{displayDrawerChildren()}
		</Drawer>
	);
};

DTDrawer.propTypes = {
	/**
    Can be a string/ReactNode
    */
	title        : PropTypes.node.isRequired,
	placement    : PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
	visible      : PropTypes.bool,
	width        : PropTypes.number,
	height       : PropTypes.number,
	maskClosable : PropTypes.bool,
	zIndex       : PropTypes.number,
	className    : PropTypes.string,
	style        : PropTypes.object,
	loading      : PropTypes.bool,
	/**
    Error message on error condition
    */
	error        : PropTypes.string,
	/**
    No data message for empty condition
    */
	noData       : PropTypes.string,
	getContainer : PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.node,
	]),
	skeletonProps : PropTypes.shape({
		rows   : PropTypes.number,
		avatar : PropTypes.oneOfType([
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
	}),
	onClose : PropTypes.func,
};

DTDrawer.defaultProps = {
	placement     : 'right',
	visible       : false,
	width         : 300,
	height        : undefined,
	maskClosable  : false,
	zIndex        : 9999,
	className     : undefined,
	style         : {},
	loading       : false,
	error         : undefined,
	noData        : undefined,
	getContainer  : 'body',
	skeletonProps : undefined,
	onClose       : () => {},
};

export default DTDrawer;
