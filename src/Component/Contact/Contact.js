import React from 'react';

const Contact = () => {
    return (
        <section className="contact-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="font-weight-bold">Let us get in touch</h3>
                        <small>Do you have web development projects, freelance missions or just opportunities to offer me? Let's get in touch and discuss it over a coffee!</small>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <form>
                            <div className='row'>
                                <div className="form-group col-md-6">
                                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="subject" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                            </div>
                            <button className="btn btn-dark pl-4 pr-4 d-block mr-5 mt-3" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center copyright">
               
            </div>
        </section>
    );
};

export default Contact;