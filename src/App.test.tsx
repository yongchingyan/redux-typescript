import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Header } from './components/Header'
import { Display } from './features/display/Display'


test('Check if login buttons and navbar is rendered', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Login/i)).toBeInTheDocument();
  expect(getByText(/Home/i)).toBeInTheDocument();
});

test('Display should switch to mobile mode with windows innerwidth changes to below 1000px', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Display />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(()=> {
    // set innerwidth to
    global.innerWidth = 500;
    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize')); 
  })

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


