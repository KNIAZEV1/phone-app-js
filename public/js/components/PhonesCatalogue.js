import Component from '../Component.js';

export default class PhonesCatalogue extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'phone-link', (event) => {
      this.props.onPhoneSelected(
        event.delegateTarget.dataset.phoneId,
      );
    });

    this.on('click', 'add-button', (event) => {
      this.props.onAdd(
        event.delegateTarget.dataset.phoneId,
      );
    });
  }

  render() {
    this.element.innerHTML = `
      <ul class="phones">
        ${ this.props.phones.map(phone => `
          <li class="thumbnail">
            <a
              data-element="phone-link"
              data-phone-id="${ phone.id }"
              href="#${ phone.id }"
              class="thumb"
            >
              <img alt="${ phone.name }" src="${ phone.imageUrl }">
            </a>

            <div class="phones__btn-buy-wrapper">
              <a
                class="btn btn-success"
                data-element="add-button"
                data-phone-id="${ phone.id }"
              >
                Add
              </a>
            </div>

            <a
              data-element="phone-link"
              data-phone-id="${ phone.id }"
              href="#${ phone.id }"
            >
              ${ phone.name }
            </a>

            <p>${ phone.snippet }</p>
          </li>

        `).join('') }
      </ul>
    `;
  }
}
