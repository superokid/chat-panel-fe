import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { AppState } from 'store/root-reducer';
import axios from 'axios';

interface Props {
  handlePostMedia: (mediaId: string, fileType: string) => void;
}

const Attachment: React.FC<Props> = ({ handlePostMedia }) => {
  const accessToken = useSelector((state: AppState) => state.chat.integrationToken.access_token);

  const direct = async (file: File) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const res = await axios.post(`https://api-whatsapp.kata.ai/v1/media`, file, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': file.type
        }
      });
      handlePostMedia(res.data.media[0].id, file.type);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AttachFileIcon />
      <AttachInput
        type="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          direct((e?.currentTarget?.files || [])[0])
        }
      />
    </Container>
  );
};

export default Attachment;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
  margin-right: 0.5em;
  position: relative;
`;

const AttachInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
`;
