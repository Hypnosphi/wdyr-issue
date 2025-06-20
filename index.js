import { createElement, useEffect, useState } from "react";
import { connect } from "react-redux";

const Inner = () => null;

const Outer = () => createElement(Inner);

function App() {
  const [_, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return <Outer />;
}

export default connect()(App);
