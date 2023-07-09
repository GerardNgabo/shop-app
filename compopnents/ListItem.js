import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const List = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Item 1',
      content: 'This is the content of item 1.',
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'This is the content of item 2.',
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'This is the content of item 3.',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <Text style={styles.listItemContent}>{item.content}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}

      Pull-to-refresh
      onRefresh={() => {
        setData([...data,{ id: 5, title: 'Item 5', content: 'This is the content of item 5.' }]);
      }}
      refreshing={false}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  listItemTitle: {
    fontWeight: 'bold',
  },
  listItemContent: {
    fontSize: 12,
  },
});

export default List;
