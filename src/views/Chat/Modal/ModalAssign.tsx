import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AppState } from 'store/root-reducer';
import { RadioGroup } from 'components/Inputs/RadioGroup';
import { postAssignStaff } from 'store/feature/action';

const STAFF = 'STAFF';

const validation = Yup.object().shape({
  [STAFF]: Yup.string().required()
});

const ModalAssign: React.FC = () => {
  const staffs = useSelector((state: AppState) => state.staffs.staffs);
  const dispatch = useDispatch();

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign to Staff</FormLabel>
        <br />
        <Formik
          initialValues={{ [STAFF]: '' }}
          validationSchema={validation}
          onSubmit={(values, { setSubmitting }) => {
            // TODO
            dispatch(
              postAssignStaff({
                conversationId: 2,
                staffId: parseInt(values[STAFF], 10)
              })
            );
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name={STAFF} component={RadioGroup}>
                {(staffs || []).map(item => {
                  return (
                    <FormControlLabel
                      key={item.id}
                      value={item.id.toString()}
                      control={<Radio color="primary" />}
                      label={item.name}
                    />
                  );
                })}
              </Field>
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                submit
              </Button>
            </Form>
          )}
        </Formik>
      </FormControl>
    </div>
  );
};

export default ModalAssign;
