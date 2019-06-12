export default class basket {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

  }

  render() {
    this.element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          ${ this.props.items.map((item, i) => `
            <li>
              <span>${ item.name }</span>
              <button
                data-element="remove-button"
                data-number-in-basket="${ i }"> x
              </button>
            </li>
            `).join('') }
        </ul>
      </section>
    `;
  }
}
