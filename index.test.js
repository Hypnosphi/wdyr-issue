import React from "react";

import whyDidYouRender from "@welldone-software/why-did-you-render";

import { act, render } from "@testing-library/react";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import App from ".";

const store = configureStore({ reducer() {} });

beforeAll(() => {
  whyDidYouRender(React, {
    include: [/^.*$/],
  });
});

test("build", async () => {
  await act(() =>
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
  );
  await act(() =>
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ),
  );
});
