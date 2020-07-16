import * as React from 'react';
import { PageHeader } from 'antd';
import * as PropTypes from 'prop-types';

/**
- Description here
*/

const DTPageHeader = ({
	title,
	subTitle,
	backIcon,
	ghost,
	avatar,
	tags,
	extra,
	onBack,
	breadcrumbConfig,
	customBreadCrumb,
	style,
	className,
	children,
}) => (
	<>
		{customBreadCrumb}
		<PageHeader
			title={title}
			subTitle={subTitle}
			backIcon={backIcon}
			ghost={ghost}
			avatar={avatar}
			tags={tags}
			extra={extra}
			breadcrumb={breadcrumbConfig}
			style={style}
			className={className}
			onBack={onBack}
		>
			{children}
		</PageHeader>
	</>
);

const TagProps = {
	color : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.oneOf(['success', 'processing', 'error', 'default']),
	]),
	icon      : PropTypes.string,
	className : PropTypes.string,
	style     : PropTypes.object,
	closable  : PropTypes.bool,
	visible   : PropTypes.bool,
	loading   : PropTypes.bool,
	onClick   : PropTypes.func,
};

const AvatarProps = {
	label : PropTypes.string,
	size  : PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.oneOf(['large', 'small', 'default']),
	]),
	shape     : PropTypes.oneOf(['circle', 'square']),
	src       : PropTypes.string,
	alt       : PropTypes.string,
	icon      : PropTypes.string,
	className : PropTypes.string,
	style     : PropTypes.object,
	onClick   : PropTypes.func,
};

DTPageHeader.propTypes = {
	title    : PropTypes.string.isRequired,
	subTitle : PropTypes.string,
	backIcon : PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
	/**
	 PageHeader type, will change background color
	*/
	ghost    : PropTypes.bool,
	/**
	 Avatar Props; For details see DTAvatar
	*/
	avatar   : PropTypes.shape(AvatarProps),
	/**
	 Tags Props; For details see DTTag
	*/
	tags     : PropTypes.oneOfType(
		[PropTypes.arrayOf(PropTypes.shape(TagProps)), PropTypes.shape(TagProps)],
	),
	extra            : PropTypes.arrayOf(PropTypes.node),
	/**
	 The PageHeader component internally handles this config
	*/
	breadcrumbConfig : PropTypes.shape({
		routes : PropTypes.arrayOf(PropTypes.shape({
			path           : PropTypes.string,
			breadcrumbName : PropTypes.string,
		})),
	}),
	/**
	 Custom breadcrumb component can also be passed
	*/
	customBreadCrumb : PropTypes.node,
	className        : PropTypes.string,
	style            : PropTypes.object,
	onBack           : PropTypes.func,
};

DTPageHeader.defaultProps = {
	subTitle         : undefined,
	backIcon         : undefined,
	ghost            : true,
	avatar           : undefined,
	tags             : undefined,
	extra            : undefined,
	breadcrumbConfig : undefined,
	customBreadCrumb : undefined,
	className        : undefined,
	style            : {},
	onBack           : undefined,
};

export default DTPageHeader;
