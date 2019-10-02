import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default function Repository({ navigation }) {
  return <WebView source={{ uri: navigation.getParam('starred').html_url }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('starred').name,
});

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
