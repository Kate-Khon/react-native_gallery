import styled from 'styled-components/native';

const ItemView = styled.View`
  flex-direction: row;
  padding: 25px;
  border: 0 solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  background-color: rgba(119, 163, 71, 0.2);
`;

const ItemImage = styled.Image`
  margin-left: 12px;
  margin-right: 35px;
  width: 120px;
  height: 120px;
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 12px;
`;

const ItemDetails = styled.View`
  justify-content: center;
`;

const ItemTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
`;

const ItemAuthor = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Item = ({ title, author, imgUrl }) => (
  <ItemView>
    <ItemImage source={{ uri: imgUrl }} />
    <ItemDetails>
      <ItemTitle>{title}</ItemTitle>
      <ItemAuthor>{author}</ItemAuthor>
    </ItemDetails>
  </ItemView>
);