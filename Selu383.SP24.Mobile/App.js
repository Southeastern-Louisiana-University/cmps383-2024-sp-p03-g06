import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const { container, header, title, main, featureButtonContainer, featureButton, buttonText, cta, ctaText, button, footer } = styles;

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Aurora in Norway: when to visit for best experience',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best places to visit this winter',
      category: 'tourism',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Active volcanos reviews: travel at your own risk',
      category: 'nature',
    },
  ];

  const navigate = () => {
    console.log("Navigating to login page");
  };

  return (
    <View style={container}>
      <View style={header}>
        <Text style={title}>Welcome to Enstay</Text>
      </View>
      

      <View style={featureButtonContainer}>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Reservation Mngt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Room Assign</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Guest Checkin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Billing</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={main}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={navigate}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemCategory}>{item.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={footer}>
        <Text>&copy; 2024 Enstay. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8b4fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  featureButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  featureButton: {
    backgroundColor: 'grey',
    paddingVertical: 5, 
    paddingHorizontal: 26, 
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 8, 
  },
  cta: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ctaText: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemCategory: {
    fontSize: 12,
    color: 'grey',
  },
});
