import Component from '../Component.js';
import PhonesCatalogue from './PhonesCatalogue.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';
import Basket from './Basket.js';

export default class PhonesPage extends Component {
  constructor(element) {
    super(element);

    this.state = { //- объект для хранения данных (свойств) компонента
      phones: [],
      selectedPhone: null,
      basketItems: [],
    };

    this.addBasketItem = (phoneId) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          phoneId
        ]
      });
    };

    this.deleteBasketItem = (index) => {
      const items = this.state.basketItems;

      this.setState({
        basketItems: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ],
      });
    };

    this.showPhone = (phoneId) => {
      getById(phoneId)
        .then(phonesDetails => {
          this.setState({ selectedPhone: phonesDetails })
        });
    };

    this.goBack = () => {
      this.setState({
        selectedPhone: null
      })
    },

    this.render();

    getAll()
      .then(phones => {
        this.setState({ phones: phones });
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
      onPhoneSelected: this.showPhone,
      onAdd: this.addBasketItem,
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: this.goBack,
      onAdd: this.addBasketItem,
    });

    this.initComponent(Basket, {
      items: this.state.basketItems,
      onDelete: this.deleteBasketItem,
    });
  }
}
