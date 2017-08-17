import React from 'react';
export const Rating = props => <div><span style={{width: Math.round(props.value / 5 * 100) + '%'}}/></div>;
