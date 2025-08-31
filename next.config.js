/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/react-minimalistic-icons/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
          plugins: ["@babel/plugin-transform-react-jsx"],
        },
      },
    });
    return config;
  },
  transpilePackages: ["react-minimalistic-icons"],
};

export default nextConfig;
