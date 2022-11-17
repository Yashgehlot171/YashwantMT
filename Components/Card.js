import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight ,Image} from 'react-native';

export default class Card extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
	
		let icon_name = require('../Assets/tray.png');
		let icon_color = '#393939';
		
		if(this.props.is_open){
			// CardSource = this.props.src;
			icon_name = this.props.name;
			icon_color = this.props.color;
		}
		
		return (
			<View style={styles.card}>
				<TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
					
                  <Image style={{width:30,height:30, }} source={icon_name} />
                
				</TouchableHighlight>		
			</View>
		);
	}

	

}


const styles = StyleSheet.create({
	card: {
		flex: 1,
		alignItems: 'center'
	},
	card_text: {
		fontSize: 50,
		fontWeight: 'bold'
	}
});