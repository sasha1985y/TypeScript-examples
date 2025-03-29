const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/greet.ts',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/, // Правило для обработки CSS файлов
        use: ['style-loader', 'css-loader'], // Сначала css-loader, затем style-loader
      },
    ]
  },
  mode: 'development', // Измените на 'development'
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищать папку dist перед каждой сборкой
    publicPath: './dist/index.html', // Добавьте это
  },
  devtool: 'source-map', // Для генерации sourcemaps
  devServer: {
    static: './dist', // Укажите директорию для статических файлов
    hot: true, // Включите горячую замену модулей
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Укажите путь к вашему шаблону HTML
      filename: 'index.html', // Имя выходного файла
      inject: 'body', // Вставка скриптов в конец body
    }),
  ],
};
