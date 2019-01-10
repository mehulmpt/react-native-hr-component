import React, { Component } from 'react'
import { View, Text, ViewPropTypes } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Hr extends Component {
	render() {

		const { text, hrPadding, thickness, lineColor, fontSize, textPadding, hrStyles, textStyles } = this.props

		return (
			<View style={[styles.row, { marginLeft: hrPadding, marginRight: hrPadding }, hrStyles]}>
				<View style={[
					styles.side,
					{ height: thickness, backgroundColor: lineColor }
				]}
				/>
				<Text style={[fontSize && { fontSize: fontSize }, { paddingLeft: textPadding, paddingRight: textPadding }, textStyles]}>{text}</Text>
				<View
					style={[
						styles.side,
						{ height: thickness, backgroundColor: lineColor }
					]}
				/>
			</View>
		)
	}
}

Hr.propTypes = {
	thickness: PropTypes.number,
	lineColor: PropTypes.string,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	fontSize: PropTypes.number,
	textPadding: PropTypes.number,
	hrPadding: PropTypes.number,
	hrStyles: ViewPropTypes.style,
	textStyles: ViewPropTypes.style
}

Hr.defaultProps = {
	thickness: 1,
	lineColor: "black",
	textPadding: 3
}
