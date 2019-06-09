export default class basket {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget =
      event.target.closest('[data-element="remove-button"]');

      if (!delegateTarget) {
        return;
      }

      let numberInBasket = delegateTarget.dataset.numberInBasket;
      this.props.items.splice(numberInBasket, 1);

      this.render();
    })
  }
  
  render() {
    this.element.innerHTML = `
    <section>
      <p>Shopping Cart</p>
      <ul>
        ${ this.props.items.map((item, i) => `
          <li>${item.name}<button data-element="remove-button" data-number-in-basket="${i}">x</button></li>
          `).join('') }
      </ul>
    </section>
    `
  }
}
