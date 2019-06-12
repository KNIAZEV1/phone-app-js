export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;
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

}
