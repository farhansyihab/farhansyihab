class Button {
  constructor(id) {
    this._element = document.getElementById(id);
    this._name = null;
  }

  addClickListener(handler) {
    const el = this._element;
    if (!el) {
      console.log('Button belum dibuat');
    }
    const event = 'click';
    if (el.addEventListener) {
      el.addEventListener(event, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent(`on${event}`, handler);
    }
  }
}

export default Button;
