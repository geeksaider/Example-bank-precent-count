import type { Config } from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#67A32C",
                second: {
                    600: "#F5C400",
                    400: "#FFCB00",
                },
                background: "#818181",
            },
        },
    },
    plugins: [],
} satisfies Config;
