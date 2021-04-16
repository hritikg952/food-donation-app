import React from 'react'
import { View, Text } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
const TimeInput = () => {

    const handleDateChange = (type, e, value) => {
      console.log(value);
      setTime({ ...time, [type]: new Date(value) });
      setToggleTimePicker({
        ...toggleTimePicker,
        [type]: !toggleTimePicker[type],
      });
    };
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default TimeInput
