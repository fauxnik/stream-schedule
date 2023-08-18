const { html, render } = htmPreact;

render(html`<${App} />`, document.getElementById('main-container'));
      
function App() {
  return html`<p>Hello world!</p>`;
}
