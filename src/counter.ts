import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('counter-btn')
export class CounterBtn extends LitElement {
  // 定義樣式
  static styles = css`
    .counter-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 32px;
    }
    
    .counter {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button.increment {
      background-color: #e1d9d9;
    }

    button.decrement {
      background-color: #c9b7b7;
    }

    button.reset {
      background-color: #0d2b44;
      color: white;
    }
  `

  // 寫入模板相關內容
  render() {
    return html`
      <div class="counter-wrapper">
        <div class="counter">
          <button class="decrement">-</button>
          <span>Count:</span>
          <button class="increment">+</button>
        </div>
        <button class="reset">Reset</button>
      </div>
    `
  }
}