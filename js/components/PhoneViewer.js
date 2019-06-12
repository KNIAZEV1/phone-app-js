import Component from '../Component.js';

export default class PhoneViewer extends Component {
  constructor(element, props) {
    super(element, props);

    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

    this.on('click', 'back-button', this.props.onBack);

    this.on('click', 'thumbnail', (event) => {
      this.setState({
        currentPicture: event.delegateTarget.src,
      })
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
