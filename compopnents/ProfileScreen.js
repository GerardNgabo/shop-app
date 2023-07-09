import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState(new Date(2000, 0, 1));
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleDatePicker = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };

  const handleSave = () => {
    alert('Profile updated');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Button title="Save" onPress={handleSave} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={image ? { uri: image } : require('../assets/image1.jpeg')}
          style={styles.image}
        />
        <Button title="Change Photo" onPress={handleImagePicker} />
      </View>
      <View style={styles.form}>
        <Input
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          label="Bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          label="Gender"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
        <Text style={styles.label}>Birthday</Text>
        <Button
          title={birthday.toLocaleDateString()}
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={birthday}
            mode="date"
            display="default"
            onChange={handleDatePicker}
            maximumDate={new Date()}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginLeft: 10,
  },
});
