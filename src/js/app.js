import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';

const { form, inputEmail, inpetPassword } = UI;
const inputs = [inputEmail, inpetPassword];
// Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
})

// Handlers
function onSubmit() {
  
}

