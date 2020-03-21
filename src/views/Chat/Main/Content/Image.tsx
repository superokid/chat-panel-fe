import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from 'store/root-reducer';

interface Props {
  mediaId?: string;
}

const Image: React.FC<Props> = ({ mediaId }) => {
  const accessToken = useSelector((state: AppState) => state.chat.integrationToken.access_token);
  const [imageData, setImage] = useState<null | string>(null);

  const getMedia = async () => {
    const res = await axios.get(`https://api-whatsapp.kata.ai/v1/media/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      responseType: 'blob'
    });

    setImage(URL.createObjectURL(res.data));
  };

  useEffect(() => {
    if (mediaId && accessToken) {
      getMedia();
    }
  }, [mediaId, accessToken]);

  if (imageData) {
    return (
      <Container>
        <img src={imageData} width="100%" alt="" />
      </Container>
    );
  }
  return null;
};

export default Image;

const Container = styled.div`
  max-width: 330px;
`;
