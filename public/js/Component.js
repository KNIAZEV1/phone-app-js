export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;
    this.children = {};
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

  setState(dataObj) {
    this.state = {
      ...this.state,
      ...dataObj,
    };

    this.render();
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      delete this.children[constructor.name];

      return;
    }

    const current = this.children[constructor.name];

    if (current && _.isEqual(props, current.props)) {
      container.replaceWith(current.element);
    } else {
      this.children[constructor.name] = new constructor(container, props);
    }
  }

}
