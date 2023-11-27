import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/styles/global";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#ddd" }],
    },
  },
};

export default preview;
