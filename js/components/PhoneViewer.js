export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;
    this.state = {
      currentPicture: this.props.phone.images[0],
    }

    this.render();

    this.element.addEventListener('click', (event) => {
      const backBtn = event.target.closest('[data-element="back-button"]');

      if(!backBtn) {
        return;
      }

      this.props.onBack();
    });

    this.element.addEventListener('click', (event) => {
      const imagePic = event.target.closest('img');

      if (!imagePic) {
        return;
      }

      this.state.currentPicture = imagePic.attributes[0].nodeValue;
      this.render();
    });

    this.element.addEventListener('click', (event) => {
      const addBtn = event.target.closest('[data-element="add-button"]');

      if (!addBtn) {
        return;
      }

      this.props.addToBasket(addBtn.dataset.phoneId)
    });
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture }">
        <button
          data-element="back-button">Back
        </button>
        <button
          data-element="add-button"
          data-phone-id="${ phone.id }">Add to basket
        </button>
        <h1>${ phone.name }</h1>
        <p>${ phone.description }</p>
        <ul class="phone-thumbs">
          ${ phone.images.map((image) => `
            <li>
              <img src="${ image }">
            </li>
          `).join('') }
        </ul>
      </div>
    `;
  }
}
