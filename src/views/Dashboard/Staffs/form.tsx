import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'components/Inputs/TextFields';
import Button from '@material-ui/core/Button';
import { IPostStaff } from 'store/staffs/type';

interface Props {
  onSubmit: (values: IPostStaff) => void;
}

const validation = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('Invalid email')
    .required(),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required()
});

const form: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', roles: [] }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            label="Name"
            name="name"
            component={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            label="Email"
            name="email"
            component={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            label="Password"
            name="password"
            component={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <div>
            <label>
              <Field type="checkbox" name="roles" value="1" />
              Product Manager
            </label>
            <label>
              <Field type="checkbox" name="roles" value="2" />
              Developer
            </label>
          </div>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default form;
