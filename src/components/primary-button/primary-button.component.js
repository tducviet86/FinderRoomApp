import { Text, TouchableOpacity } from "react-native";
import styles from "./primary-button.style";

const PrimaryButton = ({ children, onPress, style }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    {typeof children === "string" ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);
export default PrimaryButton;
