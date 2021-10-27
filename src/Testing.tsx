import * as React from 'react';
import {Mesh, Vector3} from 'three';

import {useGLTF} from '@react-three/drei';
import {Setup} from './Setup';
import {interpolate, useCurrentFrame} from 'remotion';

const Suzanne = () => {
	const {nodes, materials} = useGLTF(
		'https://jonnyburger.s3.eu-central-1.amazonaws.com/suzanne.glb',
		true
	);
	const frame = useCurrentFrame();

	const rotate = interpolate(frame, [0, 100], [0, Math.PI * 2]);

	return (
		<mesh
			scale={3}
			rotation={[rotate, rotate, rotate]}
			material={materials['Material.001']}
			geometry={(nodes.Suzanne as Mesh).geometry}
		/>
	);
};

export const DracoLocalScene = () => {
	return (
		<Setup>
			<Suzanne />
		</Setup>
	);
};
