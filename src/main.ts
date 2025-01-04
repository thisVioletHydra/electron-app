import type { Component } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App as Component);
app.mount('#app');

export default app;
export { app };
