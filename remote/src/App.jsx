import { render } from "solid-js/web";

import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <h2>Name: remote</h2>
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
