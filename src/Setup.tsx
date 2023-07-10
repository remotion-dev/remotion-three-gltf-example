import {useVideoConfig} from 'remotion';
import * as THREE from 'three';
import {ThreeCanvas} from '@remotion/three';

export const Setup = ({
	children,
	cameraFov = 75,
	cameraPosition = new THREE.Vector3(-5, 5, 5),
	lights = true,
	...restProps
}) => {
	const {width, height} = useVideoConfig();

	return (
		<ThreeCanvas
			shadows
			width={width}
			height={height}
			camera={{position: cameraPosition, fov: cameraFov}}
			dpr={window.devicePixelRatio}
			{...restProps}
		>
			{children}
			{lights && (
				<>
					<ambientLight intensity={0.8} />
					<pointLight intensity={1} position={[0, 6, 0]} />
				</>
			)}
		</ThreeCanvas>
	);
};
