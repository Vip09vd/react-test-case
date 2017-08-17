import React from 'react';
export const Rating = props => <div className="rating"><div style={{width: Math.round(props.value / 5 * 100) + '%'}}/></div>;
