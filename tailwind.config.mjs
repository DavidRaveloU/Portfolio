/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "twitter-blue": "#1DA1F2",
                "twitter-dark": "#15202B",
                "twitter-gray": "#273340",
            },
        },
    },
    plugins: [],
};
