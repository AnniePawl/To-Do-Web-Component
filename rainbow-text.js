
(function () {
  // Make a new Component
  // Choose an element to extend, usually HTMLElement
  class RainbowText extends HTMLElement {
    constructor() {
      super(); // MUST call super!
      // Attach a shadow root to the element.
      this._shadowRoot = this.attachShadow({ mode: 'open' });

      const colors = ['rgb(255,0,0)', 'rgb(245, 161, 66)', 'rgb(255, 245, 56)', 'rgb(255, 245, 56)', 'rgb(56, 129, 255)', 'rgb(56, 129, 255)']

      const str = this.innerHTML
      const originalText = str.split('')
      const newText = originalText.map((char, i) => {
        const span = document.createElement('span')
        span.innerHTML = char
        span.style.color = colors[i % colors.length]
        this._shadowRoot.appendChild(span)
        return span
      })

    }

    // Defines the attributes accessible to JS
    static get observedAttributes() {
      return [] // List an array of attribute names
    }

    // Handle changes to an attribute
    attributeChangedCallback(attributeName, oldValue, newValue) {
      if (attributeName === '???') {
        // handle changes to an attribute

      }
    }

    // Lifecycle method called when this component is appeded to the DOM
    connectedCallback() {
      // Do things when component is added to the DOM
    }
  }

  customElements.define('rainbow-text', RainbowText);
  // ---------


})()