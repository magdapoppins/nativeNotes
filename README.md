# React Native at Code in the Woods
Memos from the two-day React Native bootcamp organized by Code in the Woods.

## Day 1: Basics of React and Going Native
Using [Snack and Expo App](https://snack.expo.io/) one can easily dabble around with the basic topics of React, such as styling, components, text, inputs, flexbox, textinput, touchables, images, fetching, scrolling and flatlist. These topics were covered briefly in day 1, and the DAY_1 folder contains samples of them all.

### Stylesheets
The way styles are written varies a bit from traditional CSS in native. 

## Day 2: Diving Deeper with X-Code

### Scaffolding an app with the CL

`react-native init Adventure` will generate a template for the app. 
.xcodeproj can be opened and modified via XCode.  
`react-native run-ios` or `react-native run-android` will start the app on port 8081.  

One had to downgrade to `"babel-preset-react-native": "4.0.0"` in package.json and run `npm install` again for the scaffold to work. 

The bundler terminal opened is called **Metro Bundler**.

Native and JS are communicating over the **bridge** -> as in a marionette. The bridge can't be used to send that much data. It also only works asynchronously, which is the reason that you will want to use promises in the communication. React Native doesn't have localStorage, but it does have **AsyncStorage**, which can be used to get items. 

**AsyncStorage** => you might want to use **multiGet and multiSet** instead of setting and getting one at a time. This will increase preformance since you don't need to run back and forth on the bridge.

`npm install react-native-device-info`

Then you need to link the lib. That gives:  

`rnpm-install info Linking react-native-device-info ios dependency
rnpm-install info Platform 'ios' module react-native-device-info has been successfully linked
rnpm-install info Linking react-native-device-info android dependency
rnpm-install info Platform 'android' module react-native-device-info has been successfully linked`

`react-native link react-native-device-info`

When you add a lib with for example java, you need to recompile (`react-native run-ios`) in order to compile the java code.  

DEBUGTIPS: `console.warn` instead of logging, will show up in the simulator.
