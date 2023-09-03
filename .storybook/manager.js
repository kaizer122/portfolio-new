import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://kaisladjemi.com/icon.svg',
    brandTitle: 'Kais Ladjemi Components',
    brandUrl: 'https://kaisladjemi.com',
  },
});
