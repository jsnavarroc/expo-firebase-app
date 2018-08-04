
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';
import { Button} from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

const AppButton = (props) => {
    const {action, iconName, iconColor, title, bgColor, iconSize} = props;
    const {width} = Dimensions.get('window');
    const butttonStyles = {
        backgroundColor:bgColor,
        height:45,
        borderColor: "transparent",
        borderWidth:0,
        borderRadius:5,
        marginBottom:5,
        width:width,
    };
    const icons = <Icon 
                    name = {iconName}
                    size = {iconSize}
                    color = {iconColor}
                />;

    return (
        <Button
            onPress = {action}
            buttonStyle = {butttonStyles}
            title = {title}
            icon = {icons}
            text = {title}
            iconRight={true}
        ></Button>
    );
};

AppButton.propTypes = {
    action : PropTypes.func,
    title : PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    iconName : PropTypes.string.isRequired,
    iconColor : PropTypes.string.isRequired,
    iconSize : PropTypes.number.isRequired, 
};


export default AppButton;

