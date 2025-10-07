import './counter.ts'

const app = document.querySelector('#app')!;

// 建立一個 counter 元件
const counter = document.createElement('counter-btn');

app.appendChild(counter);