/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx", 
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.story.@(js|jsx|ts|tsx)",
    "../stories/**/*.dev.story.@(js|jsx|ts|tsx)",
    "../stories/**/react/*.@(js|jsx|ts|tsx)",
    "../stories/**/react/something.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
