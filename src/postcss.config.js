// postcss.config.js
module.exports = {
  plugins: [
    // Ini adalah plugin yang diminta oleh error
    require('@tailwindcss/postcss'),
    // Pastikan autoprefixer juga ada jika Anda menggunakannya
    require('autoprefixer'),
    // Anda mungkin juga perlu menambahkan 'postcss-preset-env' atau plugin PostCSS lainnya jika ada
  ],
};
