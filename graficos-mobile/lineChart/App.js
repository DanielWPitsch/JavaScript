import { StyleSheet, View } from 'react-native';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import {
  AlturaBoysNeg3, AlturaBoysNeg2, AlturaBoys0, AlturaBoys2, AlturaBoys3,
  ImcBoysNeg3, ImcBoysNeg2, ImcBoysNeg1, ImcBoys0, ImcBoys1, ImcBoys2, ImcBoys3,
  PerimetroBoysNeg3, PerimetroBoysNeg2, PerimetroBoysNeg1, PerimetroBoys0, PerimetroBoys1, PerimetroBoys2, PerimetroBoys3,
  PesoBoysNeg3, PesoBoysNeg2, PesoBoysNeg1, PesoBoys0, PesoBoys1, PesoBoys2, PesoBoys3,
  AlturaGirlsNeg3, AlturaGirlsNeg2, AlturaGirlsNeg1, AlturaGirls0, AlturaGirls1, AlturaGirls2, AlturaGirls3,
  ImcGirlsNeg3, ImcGirlsNeg2, ImcGirlsNeg1, ImcGirls0, ImcGirls1, ImcGirls2, ImcGirls3,
  PerimetroGirlsNeg3, PerimetroGirlsNeg2, PerimetroGirlsNeg1, PerimetroGirls0, PerimetroGirls1, PerimetroGirls2, PerimetroGirls3,
  PesoGirlsNeg3, PesoGirlsNeg2, PesoGirlsNeg1, PesoGirls0, PesoGirls1, PesoGirls2, PesoGirls3
} from './dados.js';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Chart
    //     style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
    //     xDomain={{ min: 0, max: 42 }}
    //     yDomain={{ min: 29, max: 55 }}
    //     padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
    //   >
    //     <VerticalAxis tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]} />
    //     <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
    //     <Line data={PerimetroBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1 } }} />
    //     <Line data={PerimetroBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     <Line data={PerimetroBoysNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} />
    //     <Line data={PerimetroBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1 } }} />
    //     <Line data={PerimetroBoys1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} />
    //     <Line data={PerimetroBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     <Line data={PerimetroBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1 } }} />
    //   </Chart>
    // </View>

    // <View style={styles.container}>
    //   <Chart
    //     style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
    //     xDomain={{ min: 0, max: 42 }}
    //     yDomain={{ min: 9, max: 23 }}
    //     padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
    //   >
    //     <VerticalAxis tickValues={[10, 12.5, 15, 17.5, 20, 22.5]} />
    //     <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
    //     <Line data={ImcBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1 } }} />
    //     <Line data={ImcBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     <Line data={ImcBoysNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} />
    //     <Line data={ImcBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1 } }} />
    //     <Line data={ImcBoys1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} />
    //     <Line data={ImcBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     <Line data={ImcBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1 } }} />
    //   </Chart>
    // </View>

    // <Chart
    //     style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
    //     xDomain={{ min: 0, max: 42 }}
    //     yDomain={{ min: 9, max: 23 }}
    //     yDomain={{ min: 0, max: 23 }}
    //     padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
    //   >
    //     <VerticalAxis tickValues={[10,12.5, 15, 17.5, 20, 22.5]} />
    //     <VerticalAxis tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]} />
    //     <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
    //     <Line data={PesoBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1 } }} />
    //     <Line data={PesoBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     {/* <Line data={PesoBoysNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} /> */}
    //     <Line data={PesoBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1 } }} />
    //     {/* <Line data={PesoBoys1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1 } }} /> */}
    //     <Line data={PesoBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1 } }} />
    //     <Line data={PesoBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1 } }} />
    //   </Chart>
    // </View>

    <View style={styles.container}>
      <Chart
        style={{ height: 200, width: '100%', backgroundColor: 'white' }}
        xDomain={{ min: 0, max: 42 }}
        yDomain={{ min: 43, max: 115 }}
        padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
      >
        <VerticalAxis tickValues={[45, 55, 65, 75, 85, 95, 105, 115]} />
        <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
        <Line data={AlturaBoysNeg3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
        <Line data={AlturaBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
        <Line data={AlturaBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
        <Line data={AlturaBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
        <Line data={AlturaBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
      </Chart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
