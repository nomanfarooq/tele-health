/**
 * @author Noman Farooq <nomanfarooq1432@gmail.com>
 */

import React from 'react';
import * as PropTypes from 'prop-types';

import cn from 'classnames';

/** Skeleton functional component */
function Skeleton ( {
						tagName = 'div',
						className = '',
						width = '100%',
						height = '100%',
						style = {}, ...props
					} ) {
	const Tag = tagName;
	
	const styles = {
		width,
		height,
		...(props?.styles ?? {})
	};
	
	return (
		<Tag className={cn('skeleton', className)}
			style={styles} {...props}>
			&zwnj;
		</Tag>
	);
}

// Properties validation
Skeleton.propTypes = {
	tagName: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// Default properties
Skeleton.defaultProps = {
	tagName: 'div',
	className: '',
	style: {},
	width: '100%',
	height: '100%',
};

export default Skeleton;
