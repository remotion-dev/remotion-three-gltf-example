import React from 'react';
import {AbsoluteFill} from 'remotion';
import {DracoLocalScene} from './Testing';

const container: React.CSSProperties = {
	backgroundColor: 'gold',
};

export const Scene: React.FC<{
	videoSrc: string;
	baseScale: number;
}> = () => {
	return (
		<AbsoluteFill style={container}>
			<DracoLocalScene />
		</AbsoluteFill>
	);
};
