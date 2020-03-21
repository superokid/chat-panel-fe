import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from 'store/root-reducer';
import { ReactComponent as ImgDownload } from 'assets/images/download.svg';

interface Props {
  mediaId?: string;
  type?: 'in' | 'out';
}

const getExtension = (mimeType: string): string => {
  switch (mimeType) {
    case 'image/png':
      return 'png';
    case 'image/jpg':
      return 'jpg';
    case 'image/jpeg':
      return 'jpeg';
    case 'application/pdf':
      return 'pdf';
    default:
      return mimeType;
  }
};

const Media: React.FC<Props> = ({ mediaId, type }) => {
  const accessToken = useSelector((state: AppState) => state.chat.integrationToken.access_token);

  const getMedia = async () => {
    const res = await axios.get(`https://api-whatsapp.kata.ai/v1/media/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${mediaId}.${getExtension(res.data.type)}`);
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Container type={type} onClick={() => getMedia()}>
      file
      <SImgDownload />
    </Container>
  );
};

export default Media;

const Container = styled.div<{ type: Props['type'] }>`
  max-width: 330px;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  justify-content: space-between;
  background-color: ${props => (props.type === 'in' ? '#f0f0f0' : '#cfe9ba')};
  padding: 13px 19px;
  cursor: pointer;
`;

const SImgDownload = styled(ImgDownload)`
  margin-left: 1em;
`;
