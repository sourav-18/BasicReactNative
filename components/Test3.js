import { View, Text, ActivityIndicator, Button, Alert } from "react-native";
import React from "react";

const Test3 = () => {
  return (
    <View style={{ padding: 60, flex: 1, backgroundColor: "plum" }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="#20232a" animating={true} />
      <Button
        title="show alert 1"
        onPress={() =>
          Alert.alert("Invalid user", "user is not find", [
              { text: "remind me letter", onPress: () => console.log("remind me Press") },
            { text: "Cancel", onPress: () => console.log("Cancle Press") },
            { text: "ok", onPress: () => console.log("ok Press") },
            { text: "not consider", onPress: () => console.log("not press Press") }, //ony three button supported in andriod
          ])
        }
      />
    </View>
  );
};

export default Test3;
