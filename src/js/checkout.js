import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './checkoutProcess.mjs';

const checkout = new CheckoutProcess();
checkout.calcSubtotal();

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    const myForm = document.forms[0];
    const chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if(chk_status)
        myCheckout.checkout();
});