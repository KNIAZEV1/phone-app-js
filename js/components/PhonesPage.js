import Component from '../Component.js';
import PhonesCatalogue from './PhonesCatalogue.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';
import Basket from './Basket.js';

export default class PhonesPage extends Component {
  constructor(element) {
    super(element);

    this.state = { //- объект для хранения данных (свойств) компонента
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

          <Basket></Basket>
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

      onPhoneSelected: (phoneId) => {
        this.state.selectedPhone = getById(phoneId);
        this.render();
      },

      onAdd: (phoneId) => {
        this.state = {
          ...this.state,

          basketItems: [
            ...this.state.basketItems,
            phoneId
          ]
        };

        this.render();
      }
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: () => {
        this.state.selectedPhone = null; // телефон берется с "сервера" и сохраняется в state
        this.render();
      },
    });

    this.initComponent(Basket, {
      items: this.state.basketItems,
    });
  }
}
