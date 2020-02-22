import React, { useEffect } from 'react';
// import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { TextField } from 'components/Inputs/TextFields';
import Card, { CardProps } from './Card';
import { Conversation } from 'store/chat/type';
import { Formik, Field } from 'formik';

interface Props {
  getConversationStaff: () => void;
  setConversationActive: (conversationId: CardProps) => void;
  getMessages: (id: number) => void;
  getStaffs: () => void;
  conversations: Conversation[];
  activeConversation: CardProps;
}

const Side: React.FC<Props> = ({
  getConversationStaff,
  setConversationActive,
  conversations,
  activeConversation,
  getMessages,
  getStaffs
}) => {
  useEffect(() => {
    getConversationStaff();
    getStaffs();
  }, [getConversationStaff, getStaffs]);

  const handleClick = (val: CardProps) => {
    getMessages(val.id);
    setConversationActive(val);
  };

  return (
    <div>
      <header>
        <Link to="/dashboard">Dashboard ></Link>
      </header>
      <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
        {({ values }) => (
          <>
            <Field
              placeholder="Search"
              name="search"
              component={TextField}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="disabled" />
                  </InputAdornment>
                )
              }}
              margin="normal"
            />
            {conversations
              .filter(item => item.phoneNumber.includes(values.search))
              .map((item, i) => (
                <Card
                  item={item}
                  key={i}
                  active={activeConversation.id === item.id}
                  onClick={handleClick}
                />
              ))}
          </>
        )}
      </Formik>
    </div>
  );
};

export default Side;
