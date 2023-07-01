const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ["light", "night",
			{
				light: {
					...require("daisyui/src/theming/themes")["[data-theme=light]"],
					"primary": "#14A5FF",
					info: "#020712"
				},
			},
		],
	},

	plugins: [daisyui]
};

module.exports = config;
