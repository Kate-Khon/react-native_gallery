import { useEffect, useState } from 'react';
import { 
  View, 
  FlatList, 
  TouchableOpacity,
} from 'react-native';
import { Item } from '../../components/Item';
import { Loading } from '../../components/Loading';

export const List = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

    fetch(url)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(() => alert('Photos not loaded'))
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View>
      <FlatList
        data={photos}
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => {
            navigation.navigate('Photo', { imgUrl: item.urls.regular })
          }}>
            <Item 
              title={item.id} 
              author={item.user.name} 
              imgUrl={item.urls.small} 
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
