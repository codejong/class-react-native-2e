import React, { Component } from "react";

import { ImageBackground, CameraRoll, Platform } from "react-native";

import styles from "./style";

import { PermissionsAndroid } from 'react-native';


class PhotoBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = { photoSource: null };
  }

  async componentDidMount() {
    Platform.OS === 'android' && await this.requestCameraRollPermission();
    CameraRoll.getPhotos({ first: 1 }).then(data => {
      this.setState({ photoSource: { uri: data.edges[0].node.image.uri } });
    }, error => {
      console.warn(error);
    });
  }

  async requestCameraRollPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the READ_EXTERNAL_STORAGE")
      } else {
        console.log("READ_EXTERNAL_STORAGE permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.backdrop}
        source={this.state.photoSource}
        resizeMode="cover"
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

export default PhotoBackdrop;
