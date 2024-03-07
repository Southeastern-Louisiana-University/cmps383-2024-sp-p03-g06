import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const { container, header, title, main, featureButtonContainer, featureButton, buttonText, cta, ctaText, button, footer } = styles;

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
          <Text style={buttonText}>Res. Mgmt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Room Assign</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Guest Check</Text>
        </TouchableOpacity>
        <TouchableOpacity style={featureButton}>
          <Text style={buttonText}>Billing</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={main}>
        <View style={cta}>
          <Text style={ctaText}>Get Started on Your Dream Stay Today</Text>
          <TouchableOpacity style={button}>
            <Text style={buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={button} onPress={navigate}>
            <Text style={buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'blue',
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
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
