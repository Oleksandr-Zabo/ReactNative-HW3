import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { COLORS } from "../constants/colors";

type Variant = "primary" | "secondary" | "danger";

interface Props {
	title: string;
	onPress?: () => void;
	variant?: Variant;
	active?: boolean;
	style?: ViewStyle;
}

export const CustomButton = ({ title, onPress, variant = "primary", active = false, style }: Props) => {
 	// Determine variant styles and text color centrally
 	const variantStyle = variant === "primary" ? styles.primary : variant === "secondary" ? styles.secondary : styles.danger;
 	const activeStyle = active ? (variant === "secondary" ? styles.secondaryActive : variant === "primary" ? styles.primaryActive : styles.dangerActive) : {};
 	const textColor = variant === "secondary" ? (active ? styles.textSecondaryActive : styles.textSecondary) : styles.text;

	return (
		<TouchableOpacity
			style={[styles.button, variantStyle, activeStyle, style]}
			onPress={onPress}
		>
			<Text style={textColor}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
 		alignItems: "center",
 		justifyContent: "center",
 	},
 	// submit / primary
 	primary: {
 		backgroundColor: COLORS.primary,
 		paddingVertical: 10,
 		paddingHorizontal: 14,
 		borderRadius: 10,
 	},
 	primaryActive: {
 		backgroundColor: "#05566f",
 	},
 	// secondary for toggles/filters
 	secondary: {
 		backgroundColor: COLORS.secondaryBg,
 		paddingVertical: 6,
 		paddingHorizontal: 10,
 		borderRadius: 8,
 		borderWidth: 1,
 		borderColor: COLORS.accent,
 	},
 	secondaryActive: {
 		backgroundColor: COLORS.secondaryActive,
 		borderColor: COLORS.secondaryActiveBorder,
 	},
 	// danger (red)
 	danger: {
 		backgroundColor: COLORS.danger,
 		paddingVertical: 8,
 		paddingHorizontal: 12,
 		borderRadius: 8,
 	},
 	dangerActive: {
 		backgroundColor: '#ff4b4b',
 	},
 	text: {
 		color: "#fff",
 		fontWeight: "700",
 		fontSize: 14,
 	},
 	textSecondary: {
 		color: COLORS.primary,
 		fontWeight: '700',
 		fontSize: 14,
 	},
 	textSecondaryActive: {
 		color: '#013a52',
 		fontWeight: '700',
 		fontSize: 14,
 	},
});

export default CustomButton;
