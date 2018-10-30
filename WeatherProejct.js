import React, { Component, Fragment } from "react";

import { StyleSheet, Text, View, TextInput, ImageBackground, StatusBar } from "react-native";

import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      );
    }
    return (
      <Fragment>
        <StatusBar
          translucent
          backgroundColor="rgba(255, 0, 0, 0.20)"
          animated
        />
        <View style={styles.container}>
          <ImageBackground
            source={require("./flowers.png")}
            resizeMode="cover"
            style={[styles.backdrop, { alignItems: 'center'}]}
          >
            <Text style={styles.mainText}>
              Current weather for
            </Text>
            <TextInput
              style={[styles.zipCode, styles.mainText]}
              onSubmitEditing={this._handleTextChange}
              underlineColorAndroid="transparent"
            />
            {content}
          </ImageBackground>
        </View>
      </Fragment>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center"},
  backdrop: { flex: 1, width:'100%', flexDirection: "column" , paddingTop: 30 },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { width: 50, height: baseFontSize*2 ,  borderWidth: 2},
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});

export default WeatherProject;