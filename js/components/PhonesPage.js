import PhonesCatalogue from './PhonesCatalogue.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';
import basket from './basket.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };

    this.render();
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if(!container) {
      return;
    }
    new constructor(container, props);
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

          <basket></basket>
        </div>
        <!--Main content-->
        <div class="col-md-10">
          ${ this.state.selectedPhone ?
            `<PhoneViewer></PhoneViewer>` :
            `<PhonesCatalogue></PhonesCatalogue>` }
        </div>
      </div>
    `;

    this.initComponent(PhonesCatalogue, {
      phones: this.state.phones,
      // при выборе телефона в каталоге:
      onPhoneSelected: (phoneId) => {
        this.state.selectedPhone = getById(phoneId); // телефон берется с "сервера" и сохраняется в state
        this.render();
      }
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: () => {
        this.state.selectedPhone = null; // телефон берется с "сервера" и сохраняется в state
        this.render();
      }
    });

    this.initComponent(basket, {
      items: this.state.basketItems,
    });
  }
}
