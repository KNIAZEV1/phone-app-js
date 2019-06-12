export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;
    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

    this.on('click', 'back-button', this.props.onBack);

    this.on('click', 'thumbnail', (event) => {
      this.state = {
        ...this.state,
        currentPicture: event.delegateTarget.src,
      };

      this.render();
    });
  }

  on(eventName, elementName, callback) {
    this.element.addEventListener(eventName, (event) => {
      const delegateTarget =
        event.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) {
        return;
      }

      event.delegateTarget = delegateTarget;
      callback(event);
    });
  }

  render() {
    const { phone } = this.props;
    const { currentPicture } = this.state;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ currentPicture }">
        <button
          data-element="back-button">Back
        </button>
        <button
          data-element="add-button"
          data-phone-id="${ phone.id }"
          >Add to basket
        </button>
        <h1>${ phone.name }</h1>
        <p>${ phone.description }</p>
        <ul class="phone-thumbs">
          ${ phone.images.map((imageUrl) => `
            <li>
              <img
                src="${ imageUrl }"
                data-element="thumbnail"
              >
            </li>
          `).join('') }
        </ul>
      </div>
    `;
  }
}
