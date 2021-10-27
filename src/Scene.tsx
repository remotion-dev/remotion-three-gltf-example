import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';
import {ThreeCanvas, useVideoTexture} from '@remotion/three';
import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, useVideoConfig, Video} from 'remotion';
import {Phone} from './Phone';
import {DracoLocalScene, DracoLocalSceneSt} from './Testing';

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
