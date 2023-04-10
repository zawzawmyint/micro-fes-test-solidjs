import { render } from "solid-js/web";

import "./index.scss";

import Counter from "remote/Counter";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
