export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;
  }

  render() {
    this.element.innerHTML = `
      <div>
        <img class="phone" src="${phone.imageUrl}">

        <button>Back</button>
        <button>Add to basket</button>

        <h1>${phone.name}</h1>

        <p>${phone.snippet}</p>

        <ul class="phone-thumbs">
          <li>
            <img src="${phone.imageUrl}">
          </li>
        </ul>
      </div>
    `
  }
}
