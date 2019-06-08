import PhonesCatalogue from './PhonesCatalogue.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.render();

    new PhonesCatalogue(
      document.querySelector('PhonesCatalogue')
    );
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <p>
              Search:
              <input>
            </p>

            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1 <button>x</button></li>
              <li>Phone 2 <button>x</button></li>
              <li>Phone 3 <button>x</button></li>
            </ul>
          </section>
        </div>
        <!--Main content-->
        <div class="col-md-10">
          <PhonesCatalogue></PhonesCatalogue>
        </div>
      </div>
    `;
  }
}
