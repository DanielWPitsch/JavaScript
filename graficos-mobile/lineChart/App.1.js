import { View, ScrollView, Text } from 'react-native';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart';
import {
    ImcBoysNeg3, ImcBoysNeg2, ImcBoysNeg1, ImcBoys0, ImcBoys1, ImcBoys2, ImcBoys3, AlturaGirlsNeg3, AlturaGirlsNeg2, AlturaGirls0, AlturaGirls2, AlturaGirls3,
    ImcGirlsNeg3, ImcGirlsNeg2, ImcGirlsNeg1, ImcGirls0, ImcGirls1, ImcGirls2, ImcGirls3,
    PerimetroGirlsNeg3, PerimetroGirlsNeg2, PerimetroGirlsNeg1, PerimetroGirls0, PerimetroGirls1, PerimetroGirls2, PerimetroGirls3,
    PesoGirlsNeg3, PesoGirlsNeg2, PesoGirls0, PesoGirls2, PesoGirls3
} from './dados.js';
import { ImcBoysMuitoAbaixo } from './teste.js';
import { styles } from './App.js';


export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.chartFirstTitle}> Gráficos dos Meninos </Text>
            {/* <Text style={styles.chartTitle}> Perimetro Cefálico </Text>
      
            <View style={styles.chartContainer}>
              <Chart
                style={styles.chart}
                xDomain={{ min: 0, max: 42 }}
                yDomain={{ min: 29, max: 55 }}
                padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
      
              >
                <VerticalAxis tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]} />
                <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                <Line data={PerimetroBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                <Line data={PerimetroBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={PerimetroBoysNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                <Line data={PerimetroBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                <Line data={PerimetroBoysMuitoAbaixo} smoothing="cubic-spline" theme={
                  {
                    stroke: { color: 'blue', width: 1.7 },
                    scatter: {
                      default: { width: 4, height: 4, rx: 4, color: 'blue' },
                      selected: { color: 'red' },
                    }
                  }} />
                <Line data={PerimetroBoys1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                <Line data={PerimetroBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={PerimetroBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
              </Chart>
            </View> */}

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}> Indice de Massa Corporal </Text>
                <Chart
                    style={styles.chart}
                    xDomain={{ min: 0, max: 42 }}
                    yDomain={{ min: 9, max: 23 }}
                    padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
                >
                    <VerticalAxis tickValues={[10, 12.5, 15, 17.5, 20, 22.5]} />
                    <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                    <Line data={ImcBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                    <Line data={ImcBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={ImcBoysNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={ImcBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                    <Line data={ImcBoysMuitoAbaixo} smoothing="cubic-spline" theme={{
                        stroke: { color: 'blue', width: 1.7 },
                        scatter: {
                            default: { width: 4, height: 4, rx: 4, color: 'blue' },
                            selected: { color: 'red' },
                        }
                    }} />
                    <Line data={ImcBoys1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={ImcBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={ImcBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                </Chart>
            </View>

            {/* <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}> Peso </Text>
              <Chart
                style={styles.chart}
                xDomain={{ min: 0, max: 42 }}
                yDomain={{ min: 0, max: 23 }}
                padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
              >
                <VerticalAxis tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]} />
                <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                <Line data={PesoBoysNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                <Line data={PesoBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={PesoBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                <Line data={PesoBoysMuitoAcima} smoothing="cubic-spline" theme={
                  {
                    stroke: { color: 'blue', width: 1.7 },
                    scatter: {
                      default: { width: 4, height: 4, rx: 4, color: 'blue' },
                      selected: { color: 'red' },
                    }
                  }} />
                <Line data={PesoBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={PesoBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
              </Chart>
            </View> */}

            {/* <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}> Altura </Text>
              <Chart
                style={styles.chart}
                xDomain={{ min: 0, max: 42 }}
                yDomain={{ min: 43, max: 115 }}
                padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
              >
                <VerticalAxis tickValues={[45, 55, 65, 75, 85, 95, 105, 115]} />
                <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                <Line data={AlturaBoysNeg3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                <Line data={AlturaBoysNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={AlturaBoys0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                <Line data={AlturaBoysMuitoAcima} smoothing="cubic-spline" theme={
                  {
                    stroke: { color: 'blue', width: 1.7 },
                    scatter: {
                      default: { width: 4, height: 4, rx: 4, color: 'blue' },
                      selected: { color: 'red' },
                    }
                  }} />
                <Line data={AlturaBoys2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                <Line data={AlturaBoys3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
              </Chart>
            </View> */}

            <Text style={styles.chartFirstTitle}> Gráficos das Meninas </Text>
            <Text style={styles.chartTitle}> Perimetro Cefálico </Text>
            <View style={styles.chartContainer}>
                <Chart
                    style={styles.chart}
                    xDomain={{ min: 0, max: 42 }}
                    yDomain={{ min: 29, max: 55 }}
                    padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
                >
                    <VerticalAxis tickValues={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]} />
                    <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                    <Line data={PerimetroGirlsNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                    <Line data={PerimetroGirlsNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={PerimetroGirlsNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={PerimetroGirls0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                    <Line data={PerimetroGirls1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={PerimetroGirls2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={PerimetroGirls3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                </Chart>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}> Indice de Massa Corporal </Text>
                <Chart
                    style={styles.chart}
                    xDomain={{ min: 0, max: 42 }}
                    yDomain={{ min: 9, max: 23 }}
                    padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
                >
                    <VerticalAxis tickValues={[10, 12.5, 15, 17.5, 20, 22.5]} />
                    <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                    <Line data={ImcGirlsNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                    <Line data={ImcGirlsNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={ImcGirlsNeg1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={ImcGirls0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                    <Line data={ImcGirls1} smoothing="cubic-spline" theme={{ stroke: { color: 'orange', width: 1.7 } }} />
                    <Line data={ImcGirls2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={ImcGirls3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                </Chart>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}> Peso </Text>
                <Chart
                    style={styles.chart}
                    xDomain={{ min: 0, max: 42 }}
                    yDomain={{ min: 0, max: 23 }}
                    padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
                >
                    <VerticalAxis tickValues={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]} />
                    <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                    <Line data={PesoGirlsNeg3} smoothing="none" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                    <Line data={PesoGirlsNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={PesoGirls0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                    <Line data={PesoGirls2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={PesoGirls3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                </Chart>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}> Altura </Text>
                <Chart
                    style={styles.chart}
                    xDomain={{ min: 0, max: 42 }}
                    yDomain={{ min: 43, max: 115 }}
                    padding={{ left: 30, top: 20, bottom: 30, right: 20 }}
                >
                    <VerticalAxis tickValues={[45, 55, 65, 75, 85, 95, 105, 115]} />
                    <HorizontalAxis tickValues={[0, 1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 42]} />
                    <Line data={AlturaGirlsNeg3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                    <Line data={AlturaGirlsNeg2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={AlturaGirls0} smoothing="cubic-spline" theme={{ stroke: { color: 'green', width: 1.7 } }} />
                    <Line data={AlturaGirls2} smoothing="cubic-spline" theme={{ stroke: { color: 'red', width: 1.7 } }} />
                    <Line data={AlturaGirls3} smoothing="cubic-spline" theme={{ stroke: { color: 'black', width: 1.7 } }} />
                </Chart>
            </View>
        </ScrollView>
    );
}
