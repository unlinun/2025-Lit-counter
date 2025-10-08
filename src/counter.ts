import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('counter-btn')
export class CounterBtn extends LitElement {
  @property({ type: Number, reflect: true }) count!: number;
  @property({ type: Boolean, reflect: true, }) disabled!: boolean;
  @property({ type: String,  reflect: true, }) title!: string;

  // 建構函數：初始化組件屬性
  constructor() {
    super();
    this.count = 10;
    this.disabled = false;
    this.title = 'WC-Lit Counter'
  }

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

    button:disabled {
      cursor: not-allowed;
      color: #ababab;
      background-color: #d7d7d7;
    }
  `

  // 事件處理方法
  increment() {
    this.count++;
    this._dispatchCountChanged();
  }

  decrement() {
    this.count--;
    this._dispatchCountChanged();
  }

  reset() {
    this.count = 10;
    this._dispatchCountChanged();
  }

  // 發送事件給外部
  private _dispatchCountChanged() {
    this.dispatchEvent(
      new CustomEvent('count-changed', {
        detail: { count: this.count },
        bubbles: true,
        composed: true,
      })
    );
  }

  // 寫入模板相關內容
  render() {
    return html`
      <div class="counter-wrapper">
        <h3>${this.title}</h3>
        <div class="counter">
          <button class="decrement" @click=${this.decrement}>-</button>
          <span>Count: ${this.count}</span>
          <button class="increment" @click=${this.increment}>+</button>
        </div>
        <button class="reset" ?disabled=${this.disabled} @click=${this.reset}>
          Reset
        </button>
      </div>
    `;
  }
}