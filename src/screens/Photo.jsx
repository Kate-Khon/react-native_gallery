import styled from 'styled-components/native';

const FullScreenView = styled.View`
  box-sizing: border-box;
  display: flex;
  border: 30px solid transparent;
  border-top-width: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FullScreenImg = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 22px;
`;

export const Photo = ({ route }) => {
  const { imgUrl } = route.params;
  
  return (
    <FullScreenView>
      <FullScreenImg source={{ uri: imgUrl }} />
    </FullScreenView>
  );
}
