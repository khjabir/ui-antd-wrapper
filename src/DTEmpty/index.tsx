/* eslint-disable react/forbid-prop-types */
import { Empty } from 'antd';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import DTButton from '../DTButton';

/**
- Description here
*/

const DTEmpty = ({
	image,
	imageStyle,
	description,
	createButtonLabel,
	onCreateButtonClick,
}) => (
	<Empty
		image={image}
		imageStyle={imageStyle}
		description={description || 'No data'}
	>
		{
			createButtonLabel
				? <DTButton label={createButtonLabel} onClick={onCreateButtonClick} />
				: null
		}
	</Empty>
);

DTEmpty.propTypes = {
	/**
    Can be a string/ReactNode
    */
	image               : PropTypes.node,
	imageStyle          : PropTypes.object,
	/**
    Can be a string/ReactNode
    */
	description         : PropTypes.node,
	createButtonLabel   : PropTypes.string,
	onCreateButtonClick : PropTypes.func,
};

DTEmpty.defaultProps = {
	image               : undefined,
	imageStyle          : {},
	description         : undefined,
	createButtonLabel   : undefined,
	onCreateButtonClick : () => {},
};

export default DTEmpty;
