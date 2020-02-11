import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'components/Inputs/TextFields';
import Button from '@material-ui/core/Button';
import { LoginParam } from 'store/auth/type';
import { validation, useStyles, USERNAME, PASSWORD } from '../../constant';

interface Props {
  login: (data: LoginParam) => void;
}

const LoginForm: React.FC<Props> = ({ login }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ [USERNAME]: '', [PASSWORD]: '' }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        login({
          username: values[USERNAME],
          password: values[PASSWORD]
        });
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.form}>
          <Field
            label="Username"
            name={USERNAME}
            component={TextField}
            variant="outlined"
            fullWidth
            margin="normal"
            autoFocus
          />
          <Field
            label="Password"
            name={PASSWORD}
            component={TextField}
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
