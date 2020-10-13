module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ["./public/**/*.html", "./src/**/*.vue"],
    theme: {
        extend: {
            animation: {
                'pendulum': '0.75s pendulum ease-in-out infinite',
                'idle-blink': '1s idle-blink step-start 0s infinite'
            },
            colors: {
                "linkedin": "#0077b5",
                "darcula": {
                    50: '#F5F5F6',
                    100: '#ECECEC',
                    200: '#CECFD0',
                    300: '#B1B2B3',
                    400: '#77797A',
                    500: '#3C3F41',
                    600: '#36393B',
                    700: '#242627',
                    800: '#1B1C1D',
                    900: '#121314',
                },
            },
            cursor: {
                'e-resize': 'e-resize'
            },
            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
                '6vw': '6vw',
                '7vw': '7vw'
            },
            keyframes: {
                'pendulum': {
                    '50%': { transform: 'translateY(-3px)' },
                    '100%': { transform: 'translateY(0px)' }
                },
                'idle-blink': {
                    '50%': {opacity: 0},
                    'to': {opacity: 1}
                }
            },
        },
        fontFamily: {
            fancy: ['Righteous', 'cursive'],
            body: ["Courier", "monospace"]
        },
    },
    variants: {
        animation: ['responsive', 'hover']
    },
    plugins: []
};
