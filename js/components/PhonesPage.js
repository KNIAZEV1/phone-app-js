import PhonesCatalogue from './PhonesCatalogue.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js'

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: getAll(),
      selectedPhone: null,
    };

    this.render();

    this.initComponent(PhonesCatalogue, {
      phones: this.state.phones,
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
    });
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
          ${ this.state.selectedPhone ?
            `<PhoneViewer></PhoneViewer>` :
            `<PhonesCatalogue></PhonesCatalogue>` }
        </div>
      </div>
    `;
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if(!container) {
      return;
    }
    new constructor(container, props);
  }
}
