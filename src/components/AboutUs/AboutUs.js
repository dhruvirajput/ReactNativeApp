import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HeaderComponent} from '../../layout/HeaderComponent';
import {FooterComponent} from '../../layout/FooterComponent';

export default class AboutUs extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent navigation={this.props.navigation} />
        <ImageBackground
          source={require('../../../assets/images/bg-3-cupcakes.jpeg')}
          style={{flex: 1}}>
          <ScrollView style={styles.container}>
            <Text style={styles.title}>About us</Text>
            <Text style={styles.textContent}>
              1. Diseñamos Arte Comestible a tu Gusto 🎂 Talleres de
              Capacitación.
            </Text>
            <Text style={styles.textContent}>
              2. Nuestra tienda está en línea y se encuentra en Venezuela.
              Venezuela. Venezuela.
            </Text>
            <Text style={styles.textContent}>
              3. Tenemos sesiones de capacitación disponibles para personas en
              preparación de fondant y decoraciones con merengue
            </Text>
            <Text style={styles.textContent}>
              4. Además de pasteles, también vendemos artículos de decoración.
            </Text>
            <FooterComponent />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  textContent: {
    color: 'white',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 16,
    marginLeft: 30,
    marginRight: 24,
  },
});
