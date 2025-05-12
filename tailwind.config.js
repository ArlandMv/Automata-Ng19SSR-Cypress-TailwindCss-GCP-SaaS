/** @type {import('tailwindcss').Config} 
 * this config is not being used in the project.
*/
module.exports = {
    content: [
        "./src/**/*.{html,ts}", // include Angular templates and components
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                }
            }
        }
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
