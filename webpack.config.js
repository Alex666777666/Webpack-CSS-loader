module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8,
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /.scss$/,
        use: ['sass-loader'],
      },
    ],
  },
}
