/**
 * WordPress dependencies
 */
import { G, Path, Polygon, SVG } from '@wordpress/components';

export default (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40">
		<G>
			<Path d="M21.5,30h-19C1.122,30,0,28.879,0,27.5v-13C0,13.122,1.122,12,2.5,12h19c1.379,0,2.5,1.122,2.5,2.5v13C24,28.879,22.879,30,21.5,30z M2.5,14C2.225,14,2,14.225,2,14.5v13C2,27.775,2.225,28,2.5,28h19c0.275,0,0.5-0.225,0.5-0.5v-13c0-0.276-0.225-0.5-0.5-0.5H2.5z" />
			<Path d="M27,26c-0.553,0-1-0.447-1-1V10.5c0-0.276-0.225-0.5-0.5-0.5H4c-0.552,0-1-0.448-1-1s0.448-1,1-1h21.5c1.379,0,2.5,1.122,2.5,2.5V25C28,25.553,27.553,26,27,26z" />
			<Path d="M31,22c-0.553,0-1-0.447-1-1V6.5C30,6.225,29.775,6,29.5,6H8C7.448,6,7,5.552,7,5s0.448-1,1-1h21.5C30.879,4,32,5.122,32,6.5V21C32,21.553,31.553,22,31,22z" />
			<G>
				<Polygon points="15.125,21 9.875,18 9.875,24" />
				<Path d="M9.875,25c-0.173,0-0.347-0.045-0.502-0.135C9.065,24.686,8.875,24.356,8.875,24v-6c0-0.356,0.19-0.686,0.498-0.865c0.31-0.178,0.688-0.18,0.998-0.003l5.25,3c0.312,0.178,0.504,0.51,0.504,0.868s-0.192,0.69-0.504,0.868l-5.25,3C10.217,24.956,10.046,25,9.875,25z M10.875,19.724v2.553L13.109,21L10.875,19.724z" />
			</G>
		</G>
	</SVG>
);