import { el, mount } from '../lib/redom.es.min.js';
import { AppComponent } from './components/app-component.js';

const app = new AppComponent();
mount(document.body, app);
app.update('Hi');