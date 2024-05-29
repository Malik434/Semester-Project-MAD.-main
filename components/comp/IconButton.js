// components/IconButton.js
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles";

const IconButton = ({ onPress, icon, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconBox}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.iconText}>{text}</Text>
  </TouchableOpacity>
);

export default IconButton;
