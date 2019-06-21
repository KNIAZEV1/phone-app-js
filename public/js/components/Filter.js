import Component from '../Component.js';

export default class Filter extends Component {
  constructor(element, props) {
    super(element, props);

    this.on('change', 'query-field', (event) => {
      props.onQueryChange(event.target.value);
    });

    this.on('change', 'sort-field', (event) => {
      props.onSortChange(event.target.value);
    });

    this.render();
  }

  render() {
    this.element.innerHTML = `
      <section>

        <p>
          Search:
          <input
            data-element="query-field"
            value="${this.props.query}"
          >
        </p>

        <p>
          Sort by:
          <select data-element="sort-field">
            <option
              value="name"
              ${ this.props.sortField === 'name' ? 'selected' : '' }
            >
              Alphabetical
            </option>

            <option
              value="age"
              ${ this.props.sortField === 'age' ? 'selected' : '' }
            >
              Newest
            </option>
          </select>
        </p>

      </section>
    `;
  }
}
