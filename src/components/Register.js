import React, { Component } from 'react'
import {View, Text, Alert, TextInput, Image, TouchableHighlight, Platform, StyleSheet} from 'react-native';
import { MKTextField, MKRadioButton, MKColor, mdl } from 'react-native-material-kit';
// import RadioGroup from 'react-native-radio-buttons-group';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Number...')
  .withStyle({
	  	height: 48,  // have to do it on iOS
		marginTop: 10,
		width: '90%'
	})
  .withTextInputStyle({flex: 1, color: 'black'})
  .withFloatingLabelFont({
    fontSize: 15,
    // fontStyle: 'italic',
    fontWeight: '200',
  })
//   .withKeyboardType('numeric')
.build();

export default class Register extends Component {

  constructor(props){
		super(props);
		this.state = {
			upi_id: '',
			disabled: 0,
		}
		this.radioGroup = new MKRadioButton.Group();
  };

  //RadioButton
  state = {
		data: [
			{
				label: 'Default value is same as label',
			},
			{
				label: 'Value is different',
				value: "I'm not same as label",
			},
			{
				label: 'Color',
				color: 'green',
			},
			{
				disabled: true,
				label: 'Disabled',
			},
			{
				label: 'Size',
				size: 32,
			},
		],
	};

	onPress = data => this.setState({ data });

	render() {

		// let selectedButton = this.state.data.find(e => e.selected == true);
		// selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;


		return (

			<View style={styles.container}>
				<TextfieldWithFloatingLabel
							//tintColor={MKColor.Lime}
							//textInputStyle={{color: MKColor.Orange}}
							onChangeText={textInputValue => this.setState({upi_id: textInputValue})}
							placeholder="Bhim Upi Id"
							// style={{marginTop: 40}}
						/>
				{/* <MKRadioButton
				checked={true}
				group={this.radioGroup}
				/> */}

				<View style={[styles.row, {marginTop: 10}]}>
					<View style={styles.col}>
						<MKRadioButton
							group={this.radioGroup}
						/>
						<Text style={styles.legendLabel}>Yes</Text>
					</View>
					<View style={styles.col}>
						<MKRadioButton 
							checked={true}
							group={this.radioGroup}
						/>
						<Text style={styles.legendLabel}>No</Text>
					</View>
       			</View>

				{/* <View style={styles.container}>
					<Text >
						Value = {selectedButton}
					</Text>
					<RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
				</View> */}
			</View> 
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
			flex: 1,
			//backgroundColor:'gray',
			padding: 30,
			width: '100%',
	},
	// login:{
	// 	marginTop: 50,
	// 	alignItems: 'center',
	// 	//backgroundColor: 'pink',
	// 	width: '100%',
	// },
	// logo:{
	// 	position: 'absolute',
	// 	width: 300,
	// 	height:100,
	// },
	textInput:{
		color: 'purple',
		borderBottomColor: 'lightblue',
		borderBottomWidth: 2,
		justifyContent: 'flex-start',
		width: '90%',
		marginTop: 10,
		fontSize: 20,
		//backgroundColor: 'green',
		borderRadius: 5,
	},
	buttonContainer: {
		marginTop: 20,
  },
	// googleSignIn:{
	// 	marginTop: 50,
	// 	padding: 5,
	// 	// backgroundColor: 'blue',
	// },
	// input: {
	// 	height: 48,  // have to do it on iOS
	// 	marginTop: 10,
	// },
	row: {
		flexDirection: 'row',
	},
	col: {
		flex: 1,
		flexDirection: 'column',
		// alignItems: 'center',
		marginLeft: 7, 
		marginRight: 5,
	},
	legendLabel: {
		// textAlign: 'center',
		color: '#666666',
		marginTop: 10, 
		marginBottom: 20,
		fontSize: 12,
		fontWeight: '300',
	},
})
