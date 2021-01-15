import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Lottie from 'react-lottie';

import color from '../config/color';
import done from '../assets/img/done.json';
import FormField from '../components/FormField';
import {
  BtnLink,
  EQUALGRID,
  GRID,
  HALFGRID,
} from '../components/styledComponents';

// animation to display on successful submission before redirecting.
const Submitted = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: done,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Done>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Done>
  );
};

//setting the initial values
const initialValues = {
  ministry: '',
  minister: '',
  origin: '',
  ministerState: '',
  state_origin: '',
  address: '',
  web: '',
};

//creating the validation schema
const validationSchema = yup.object().shape({
  ministry: yup
    .string()
    .required('Ministry is a required field')
    .min(10, 'Ministry must be at least 10 characters'),
  minister: yup
    .string()
    .required('Name of minister is a required field')
    .min(3, 'Name of minister must be at least 3 characters'),
  origin: yup
    .string()
    .required('State of Origin is a required field')
    .min(3, 'State must be at least 3 characters'),
  ministerState: yup
    .string()
    .min(3, 'Name of minister of state must be at least 3 characters'),
  state_origin: yup.string().min(3, 'State must be at least 3 characters'),
  address: yup
    .string()
    .required('Address is a required field')
    .min(10, 'Address must be at least 10 characters'),
  web: yup
    .string()
    .required('Website is a required field')
    .min(10, 'Website must be at least 10 characters'),
});

function Upload({ landing, changePage, uploadData }) {
  const [submitted, setSubmitted] = useState(false);

  // on submit function to handle submitted data and redirect on successful submission
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    const {
      ministry,
      minister,
      origin,
      ministerState,
      state_origin,
      address,
      web,
    } = values;
    const data = {
      name: ministry,
      minister: minister,
      origin: origin,
      ministerOfState: {
        minister: ministerState.length > 0 ? ministerState : null,
        origin: state_origin.length > 0 ? state_origin : null,
      },
      address,
      website: web,
    };
    uploadData(data);
    resetForm();
    window.scroll(0, 0);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      changePage(true);
    }, 2000);
  };
  // use formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const ministryProps = formik.getFieldProps('ministry');
  const ministerProps = formik.getFieldProps('minister');
  const originProps = formik.getFieldProps('origin');
  const ministerStateProps = formik.getFieldProps('ministerState');
  const state_originProps = formik.getFieldProps('state_origin');
  const addressProps = formik.getFieldProps('address');
  const webProps = formik.getFieldProps('web');

  // do not render this component if landing page is being displayed
  if (landing) return null;

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <h1>Upload</h1>
        <HALFGRID>
          <div className="box">
            <FormField
              name="ministry"
              type="text"
              label="Ministry"
              {...ministryProps}
            />
            {formik.touched.ministry && formik.errors.ministry ? (
              <div className="error">{formik.errors.ministry}</div>
            ) : null}
          </div>
        </HALFGRID>
        <EQUALGRID>
          <div className="box">
            <FormField
              name="minister"
              type="text"
              label="Name of Minister"
              {...ministerProps}
            />
            {formik.touched.minister && formik.errors.minister ? (
              <div className="error">{formik.errors.minister}</div>
            ) : null}
          </div>
          <div className="box">
            <FormField
              name="origin"
              type="text"
              label="State of Origin"
              {...originProps}
            />
            {formik.touched.origin && formik.errors.origin ? (
              <div className="error">{formik.errors.origin}</div>
            ) : null}
          </div>
        </EQUALGRID>
        <div className="state">
          <p>Minister of State (Optional)</p>
          <EQUALGRID>
            <div className="box">
              <FormField
                name="ministerState"
                type="text"
                placeholder="Name"
                {...ministerStateProps}
              />
              {formik.touched.ministerState && formik.errors.ministerState ? (
                <div className="error">{formik.errors.ministerState}</div>
              ) : null}
            </div>
            <div className="box">
              <FormField
                name="state_origin"
                type="text"
                placeholder="state of origin"
                {...state_originProps}
              />
              {formik.touched.state_origin && formik.errors.state_origin ? (
                <div className="error">{formik.errors.state_origin}</div>
              ) : null}
            </div>
          </EQUALGRID>
        </div>
        <GRID>
          <div className="box">
            <FormField
              name="address"
              type="text"
              label="Address"
              {...addressProps}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="error">{formik.errors.address}</div>
            ) : null}
          </div>
        </GRID>
        <HALFGRID>
          <div className="box">
            <FormField name="web" type="text" label="Website" {...webProps} />
            {formik.touched.web && formik.errors.web ? (
              <div className="error">{formik.errors.web}</div>
            ) : null}
          </div>
        </HALFGRID>
        <div className="button">
          <BtnLink type="submit">Submit</BtnLink>
        </div>
        {submitted && <Submitted />}
      </form>
    </Wrapper>
  );
}

const Done = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 100;
`;

const Wrapper = styled.section`
  padding: 6rem 0;
  font-size: 1.4em;
  form {
    width: 75%;
    margin: 0 auto;
    background-color: #f7f7f7;
    padding: 4rem;
    font-family: 'quicksand', sans-serif;
    h1 {
      margin-bottom: 2rem;
      font-size: 1.6em;
      color: ${color.colorGreen};
    }
    .error {
      color: ${color.colorRed};
      margin-bottom: 1rem;
      font-weight: bold;
      margin-left: 1rem;
    }
    .button {
      margin-top: 2rem;
      button {
        cursor: pointer;
      }
    }
    .state {
      margin: 4rem 0 3rem;
      background-color: ${color.colorBlue};
      padding: 2rem;
      p {
        font-weight: bold;
        margin-left: 1rem;
      }
    }
    label {
      font-weight: bold;
      margin-left: 0.5rem;
    }
  }
  @media (min-width: 767px) {
    form {
      width: 60%;
    }
    .error {
      margin-bottom: 0 !important;
    }
  }
`;

export default Upload;
