import nextra from "nextra";

const withNextra = nextra({
  latex: true,
});

export default withNextra({
  // build
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: "dist",
  // settings
  devIndicators: false,
});
