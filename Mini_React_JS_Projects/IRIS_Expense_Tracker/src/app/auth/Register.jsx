import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import { Link } from 'react-router-dom';
import axios from './../../Axios';
import { authApiEndpoints } from './../../API';
import LocaleToggle from './../locale/LocaleToggle';

const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Name field is required').max(20, 'Name must be at most 20 characters'),
  email: yup.string().required('Email field is required').email('Email must be a valid email'),
  password: yup.string().required('Password field is required').min(6, 'Password must be at least 6 characters'),
  confirm_password: yup.string().required('Password confirm field is required').oneOf([yup.ref('password')], 'Confirm password does not match')
});

const Register = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, errors, setError, reset } = useForm({
    validationSchema: registerValidationSchema
  });

  const messages = useRef(null); // Define messages using useRef

  const submitRegister = (data) => {
    setSubmitting(true);
    axios.post(authApiEndpoints.register, JSON.stringify(data))
      .then(response => {
        if (response.status === 201) {
          messages.current.clear(); // Access messages using messages.current
          messages.current.show({ severity: 'success', detail: 'Registration successful. Go to login.', sticky: true });
          reset();
        }
        setSubmitting(false);
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          let errors = Object.entries(error.response.data).map(([key, value]) => ({ name: key, message: value[0] }));
          setError(errors);
        } else {
          messages.current.show({ severity: 'error', detail: 'Something went wrong. Try again.', sticky: true });
        }
        setSubmitting(false);
      });
  };

  return (
    <div>
      <Helmet title='Register' />
      <div className="p-grid p-nogutter p-align-center p-justify-center" style={{ height: '95vh' }}>
        <Card className="p-sm-12 p-md-6 p-lg-4" style={{ borderRadius: 5, minHeight: 65 }}>
          <div className="p-col-12 p-fluid">
            <Messages ref={messages} /> {/* Attach ref={messages} to Messages component */}
          </div>
          <div className="p-col-12">
            <div className="p-card-title p-grid p-nogutter p-justify-between">Register
              <LocaleToggle />
            </div>
            <div className="p-card-subtitle">Enter your info to register</div>
          </div>

          <form onSubmit={handleSubmit(submitRegister)}>
            <div className="p-col-12 p-fluid">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon"><i className="pi pi-user" /></span>
                <input type="text" name="name" placeholder={'Name'} ref={register} className="p-inputtext p-component p-filled" />
              </div>
              <p className="text-error">{errors.name?.message}</p>
            </div>
            <div className="p-col-12 p-fluid">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon"><i className="pi pi-envelope" /></span>
                <input type="text" name="email" placeholder={'Email'} ref={register} className="p-inputtext p-component p-filled" />
              </div>
              <p className="text-error">{errors.email?.message}</p>
            </div>
            <div className="p-col-12 p-fluid">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon"><i className="pi pi-key" /></span>
                <input type="password" name="password" placeholder={'Password'} ref={register} className="p-inputtext p-component p-filled" />
              </div>
              <p className="text-error">{errors.password?.message}</p>
            </div>
            <div className="p-col-12 p-fluid">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon"><i className="pi pi-key" /></span>
                <input type="password" name="confirm_password" placeholder={'Confirm Password'} ref={register} className="p-inputtext p-component p-filled" />
              </div>
              <p className="text-error">{errors.confirm_password?.message}</p>
            </div>
            <div className="p-col-12 p-fluid">
              <Button disabled={submitting} type="submit" label={'Register'} icon="pi pi-sign-in" className="p-button-raised" />
            </div>
            <div className="p-grid p-nogutter p-col-12 p-justify-center">
              <Link to="/login">Login</Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default React.memo(Register);
