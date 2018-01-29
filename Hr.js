import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class Hr extends Component {
  render() {
    return (
      <View style={[styles.row, {marginLeft: this.props.hrPadding, marginRight: this.props.hrPadding}, this.props.hrStyles]}>
        <View style={[
            styles.side,
            { height: this.props.thickness || 1, backgroundColor: this.props.lineColor || "black" }
          ]}
        />
        <Text style={[this.props.fontSize && {fontSize: this.props.fontSize}, {paddingLeft: this.props.textPadding || 3, paddingRight: this.props.textPadding || 3}, (this.props.textStyles || {})]}>{this.props.text}</Text>
        <View
          style={[
            styles.side,
            { height: this.props.thickness || 1, backgroundColor: this.props.lineColor || "black" }
          ]}
        />
      </View>
    );
  }
}

export default Hr

Hr.propTypes = {
  thickness: PropTypes.number,
  lineColor: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontSize: PropTypes.number,
  textPadding: PropTypes.number,
  hrPadding: PropTypes.number,
  hrStyles: PropTypes.object,
  textStyles: PropTypes.object
};
