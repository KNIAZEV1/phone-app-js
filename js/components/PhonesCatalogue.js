export default class PhonesCatalogue {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="phone-link"]');

      if(!delegateTarget) {
        return;
      }
      this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
    });

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="add-button"]');

      if (!delegateTarget) {
        return;
      }

      this.props.addToBasket(delegateTarget.dataset.phoneId)
    });
  }

  render() {
    this.element.innerHTML = `
      <ul class="phones">
        ${ this.props.phones.map(phone => `
          <li class="thumbnail">
            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
              class="thumb"
            >
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>

            <div class="phones__btn-buy-wrapper">
              <a
              class="btn btn-success"
              data-element="add-button"
              data-phone-id="${phone.id}"
              >
                Add
              </a>
            </div>

            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
            >
              ${phone.name}
            </a>

            <p>${phone.snippet}</p>
          </li>

        `).join('') }
      </ul>
    `;
  }
}
