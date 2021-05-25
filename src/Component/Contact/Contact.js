import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Syeda Khadiza Akhter',
        email: '',
        message: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_tl9j0yf',
            'template_posm74j',
            toSend,
            'user_UI18DHbJ6e2t5pDFyZgVc'
          )
            .then((response) => {
              alert('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              alert('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return (
        <section className="contact-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="font-weight-bold">Let us get in touch</h3>
                        <small>Do you have web development projects, freelance missions or just opportunities to offer me? Let's get in touch and discuss it over a coffee!</small>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" name="from_name" onChange={handleChange} className="form-control" placeholder="Name" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" name='email' className="form-control" onChange={handleChange} placeholder="Email"  required/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name='message' onChange={handleChange} placeholder="Message" rows="3"></textarea>
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