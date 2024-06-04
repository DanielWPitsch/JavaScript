import { StyleSheet, Text, View, TextInput } from 'react-native';
import { CartesianChart, Line, useChartPressState } from "victory-native";
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { useFont } from '@shopify/react-native-skia';

const DATA =
  [
    { x: 0, y: 10.1 }, { x: 1, y: 10.8 }, { x: 2, y: 11.8 }, { x: 3, y: 12.4 },
    { x: 4, y: 12.7 }, { x: 5, y: 12.9 }, { x: 6, y: 13.0 }, { x: 7, y: 13.0 },
    { x: 8, y: 13.0 }, { x: 9, y: 12.9 }, { x: 10, y: 12.9 }, { x: 11, y: 12.8 },
    { x: 12, y: 12.7 }, { x: 13, y: 12.6 }, { x: 14, y: 12.6 }, { x: 15, y: 12.5 },
    { x: 16, y: 12.4 }, { x: 17, y: 12.4 }, { x: 18, y: 12.3 }, { x: 19, y: 12.3 },
    { x: 20, y: 12.2 }, { x: 21, y: 12.2 }, { x: 22, y: 12.2 }, { x: 23, y: 12.2 },
    { x: 24, y: 12.1 }, { x: 25, y: 12.4 }, { x: 26, y: 12.4 }, { x: 27, y: 12.3 },
    { x: 28, y: 12.3 }, { x: 29, y: 12.3 }, { x: 30, y: 12.3 }, { x: 31, y: 12.3 },
    { x: 32, y: 12.2 }, { x: 33, y: 12.2 }, { x: 34, y: 12.2 }, { x: 35, y: 12.2 },
    { x: 36, y: 12.1 }, { x: 37, y: 12.1 }, { x: 38, y: 12.1 }, { x: 39, y: 12.1 },
    { x: 40, y: 12.0 }, { x: 41, y: 12.0 }, { x: 42, y: 12.0 },
  ]

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)


export default function App() {
  const { state, isActive } = useChartPressState({ x: 0, y: 0 })
  const font = useFont(require("./fonts/Roboto-Black.ttf"))

  const animatedText = useAnimatedProps(() => {
    return {
      text: ' $(state.y.value.value.toFixed(1))',
      defaultValue: ''
    }
  })
  const animatedTextMes = useAnimatedProps(() => {
    return {
      text: 'Mês $(state.x.value.value)',
      defaultValue: ''
    }
  })

  return (
    <View style={styles.container}>
      <View style={{ width: '80%', height: 100 }}>

        {isActive && (
          <View>
            <AnimatedTextInput
              editable={false}
              underlineColorAndroid={"transparent"}
              style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}
              useAnimatedProps={animatedText}
            ></AnimatedTextInput>

            <AnimatedTextInput
              editable={false}
              underlineColorAndroid={"transparent"}
              animatedProps={animatedTextMes}
            ></AnimatedTextInput>
          </View>
        )}
        {!isActive && (
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}
            >
              {DATA[DATA.length - 1].y.toFixed(1)}
            </Text>
            <Text>Hoje</Text>
          </View>
        )}

        <CartesianChart data={DATA} xKey="x" yKeys={["y"]}
          chartPressState={state}
          axisOptions={{
            tickCount: 5,
            font: font,
            labelOffset: { x: 4, y: 2 },
            labelPosition: "outset",
            formatYLabel: (value) => '$(value)',
            formatXLabel: (value) => value.toFixed(1)
          }}
        >
          {({ points }) => (
            <Line points={points.y} color="red" strokeWidth={4} />
          )}
        </CartesianChart>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
});
