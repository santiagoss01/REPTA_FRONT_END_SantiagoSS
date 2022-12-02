import React from 'react';
import './Layout.css';


const Mypaymentlayout = () => {

    const [numericInput, setNumericinput] = React.useState("");

    let validation = () => {
        if (numericInput === ("")) {
            return false;
        }
        else if (typeof (numericInput) === "number" || numericInput.length === 16) {
            return "valid";
        }
        else return "wrong";
    };


    return (<div id='main-container' className='container-fluid d-flex justify-content-center'>
        <div className='row d-flex justify-content-center' id='Layout-body'>
            <div className='col-12 d-grid gap-2 ' id='input-elements'>
                <div className="card my-2">
                    <div class="card-header">
                        <span className='logo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alexa" viewBox="0 0 16 16">
                            <path d="M7.996 0A7.998 7.998 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.602 5.602 0 0 1 2.4 7.865 5.579 5.579 0 0 1 8.054 2.4a5.599 5.599 0 0 1 5.535 5.81l-.002.046a6.116 6.116 0 0 1-.012.192l-.005.061a4.85 4.85 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 7.998 7.998 0 0 0 7.996.001Z" />
                        </svg></span>
                        <h5>Your payment info.</h5>
                        <div class=" shadow-sm pt-4 pl-2 pr-2 pb-2">


                            <ul role="tablist" class="nav  nav-pills rounded nav-fill mb-3">
                                <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                                <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> Paypal </a> </li>
                            </ul>
                        </div>

                        <div class="tab-content">

                            <div id="credit-card" class="tab-pane fade show active pt-3">
                                <form role="form" >
                                    <div class="form-group"> <label for="username">
                                        <h6>Card Owner</h6>
                                    </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
                                    <div class="form-group"> <label for="cardNumber">
                                        <h6>Card number</h6>
                                    </label>
                                        <div class= {"input-group " + validation()}> <input type="text" onChange={e => setNumericinput(e.target.value)} value={numericInput} name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                            <span className="input-group-text text-muted "> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span>
                                        </div>
                                    </div>
                                    <div class="row d-flex" id='security-details'>
                                        <div class="col">
                                            <div class="form-group"> <label><span class="hidden-xs">
                                                <h6>Expiration Date</h6>
                                            </span></label>
                                                <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required /> <input type="number" placeholder="YY" name="" class="form-control" required /> </div>
                                            </div>
                                        </div>
                                        <div class="col align-self-end" id='ccv' >
                                            <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                            </label> <input type="text" required class="form-control hidden-xs" /> </div>
                                        </div>
                                    </div>
                                    <div class="card-footer"> <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button></div>
                                    <div class="text-center p-4">
                                        © 2021 Copyright:
                                        <a class="text-reset" href="https://barcelonadigitaltalent.com/jump2digital-2022/">jump2digital-2022</a>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    </div>)
}

export default Mypaymentlayout;