import { configure, addDecorator, addParameters } from '@storybook/react';
import { withCssResources } from '@storybook/addon-cssresources';

// global
addDecorator(withCssResources);
addParameters({
  cssresources: [
    {
      id: `bootstrap`,
      code: `<link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />`,
      picked: true,
    },
    {
      id: `index.css`,
      code: `<link rel="stylesheet" href="/src/App.css" /> `,
      picked: false,
    },
  ],
});

function loadStories() {
  require('../src/__stories__');
}

configure(loadStories, module);
