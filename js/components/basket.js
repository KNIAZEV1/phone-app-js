export default class basket {
  constructor(element) {
    this.element = element;
    this.props = props;

    this.render();
  }
  render() {
    this.element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          <!-- push in array ID  -->
          <li>Phone 1 <button>x</button></li>
          <li>Phone 2 <button>x</button></li>
          <li>Phone 3 <button>x</button></li>
        </ul>
      </section>
    `;
  }
}
