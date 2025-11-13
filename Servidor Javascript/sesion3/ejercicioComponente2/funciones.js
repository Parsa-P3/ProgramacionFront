 class MiTabla extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = [];
  }

  set data(value) {
    return this._data = value;
  }

  get data() {
    return this._data;
  }

  connectedCallback() {
    this.data = [
      { nombre: 'Ana', edad: 28, ciudad: 'Madrid' },
      { nombre: 'Luis', edad: 35, ciudad: 'Valencia' },
    ];
  }

  render() {
    if (!this.shadowRoot) return;
    const data = this.data;
     let sHtml='<div>';
     if (data.length > 0) {
        sHTML += '<div id>';
}

customElements.define('mi-tabla', MiTabla);
tabla.data = [
  { nombre: 'Mario', edad: 30, ciudad: 'Bilbao' },
  { nombre: 'Lucía', edad: 25, ciudad: 'Granada' },
];