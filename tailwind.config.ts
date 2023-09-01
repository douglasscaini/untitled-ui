import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                app: 'minmax(18rem, 20rem) 1fr'
            },
            colors: {
                rocket: '#8257e6'
            }
        },
    },
    plugins: [],
}

export default config
