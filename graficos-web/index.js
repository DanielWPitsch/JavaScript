let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');

let chart = new Chart(primeiroGrafico, {
    type: 'line',

    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],

        datasets: [{
                label: '-3SD',
                data: [
                    30.7, 33.8, 35.6, 37.0, 38.0, 38.9, 39.7, 40.3, 40.8, 41.2, 41.6, 41.9,
                    42.2, 42.5, 42.7, 42.9, 43.1, 43.2, 43.4, 43.5, 43.7, 43.8, 43.9, 44.1,
                    44.2, 44.3, 44.4, 44.5, 44.6, 44.7, 44.8, 44.8, 44.9, 45.0, 45.1, 45.1,
                    45.2, 45.3, 45.3, 45.4, 45.4, 45.5, 45.5
                ],
                //backgroundColor: "rgba(255,99,71,1)",
                backgroundColor: "rgba(255,255,255, 0)",
                borderColor: "#FF0000"
            },
            {
                label: '-2SD',
                data: [
                    31.9, 34.9, 36.8, 38.1, 39.2, 40.1, 40.9, 41.5, 42.0, 42.5, 42.9, 43.2,
                    43.5, 43.8, 44.0, 44.2, 44.4, 44.6, 44.7, 44.9, 45.0, 45.2, 45.3, 45.4,
                    45.5, 45.6, 45.8, 45.9, 46.0, 46.1, 46.1, 46.2, 46.3, 46.4, 46.5, 46.6,
                    46.6, 46.7, 46.8, 46.8, 46.9, 46.9, 47.0
                ],
                //backgroundColor: "rgba(255,165,0, 1)",
                backgroundColor: "rgba(255,255,255, 0)",
                borderColor: "#FF4500"
            },
            {
                label: '-1SD',
                data: [
                    33.2, 36.1, 38.0, 39.3, 40.4, 41.4, 42.1, 42.7, 43.3, 43.7, 44.1,
                    44.5, 44.8, 45.0, 45.3, 45.5, 45.7, 45.9, 46.0, 46.2, 46.4, 46.5,
                    46.6, 46.8, 46.9, 47.0, 47.1, 47.2, 47.3, 47.4, 47.5, 47.6, 47.7,
                    47.8, 47.9, 48.0, 48.0, 48.1, 48.2, 48.2, 48.3, 48.4, 48.4
                ],
                //backgroundColor: "rgba(255,215,0, 1)",
                backgroundColor: "rgba(255,255,255, 1)",
                borderColor: "#FFFF00"
            },
            {
                label: 'SD0',
                data: [
                    34.5, 37.3, 39.1, 40.5, 41.6, 42.6, 43.3, 44., 44.5, 45., 45.4,
                    45.8, 46.1, 46.3, 46.6, 46.8, 47., 47.2, 47.4, 47.5, 47.7, 47.8,
                    48., 48.1, 48.3, 48.4, 48.5, 48.6, 48.7, 48.8, 48.9, 49., 49.1,
                    49.2, 49.3, 49.4, 49.5, 49.5, 49.6, 49.7, 49.7, 49.8, 49.9

                ],
                //backgroundColor: "rgba(0,0,0, 0)",
                backgroundColor: "rgba(255,255,255, 1)",
                borderColor: "#008000"
            },
            {
                label: 'SD1',
                data: [
                    35.7, 38.4, 40.3, 41.7, 42.8, 43.8, 44.6, 45.2, 45.8, 46.3, 46.7,
                    47., 47.4, 47.6, 47.9, 48.1, 48.3, 48.5, 48.7, 48.9, 49., 49.2,
                    49.3, 49.5, 49.6, 49.7, 49.9, 50., 50.1, 50.2, 50.3, 50.4, 50.5,
                    50.6, 50.7, 50.8, 50.9, 51., 51., 51.1, 51.2, 51.3, 51.3

                ],
                //backgroundColor: "rgba(152,251,152, 1)",
                backgroundColor: "rgba(255,255,255, 1)",
                borderColor: "#FFFF00"
            },
            {
                label: 'SD2',
                data: [
                    37., 39.6, 41.5, 42.9, 44., 45., 45.8, 46.4, 47., 47.5, 47.9,
                    48.3, 48.6, 48.9, 49.2, 49.4, 49.6, 49.8, 50., 50.2, 50.4, 50.5,
                    50.7, 50.8, 51., 51.1, 51.2, 51.4, 51.5, 51.6, 51.7, 51.8, 51.9,
                    52., 52.1, 52.2, 52.3, 52.4, 52.5, 52.5, 52.6, 52.7, 52.8

                ],
                //backgroundColor: "rgba(255,215,0, 1)",
                backgroundColor: "rgba(255,255,255, 1)",
                borderColor: "#FF4500"
            },
            {
                label: 'SD3',
                data: [
                    38.3, 40.8, 42.6, 44.1, 45.2, 46.2, 47., 47.7, 48.3, 48.8, 49.2,
                    49.6, 49.9, 50.2, 50.5, 50.7, 51., 51.2, 51.4, 51.5, 51.7, 51.9,
                    52., 52.2, 52.3, 52.5, 52.6, 52.7, 52.9, 53., 53.1, 53.2, 53.3,
                    53.4, 53.5, 53.6, 53.7, 53.8, 53.9, 54., 54.1, 54.1, 54.2

                ],
                //backgroundColor: "rgba(255,165,0, 1)",
                backgroundColor: "rgba(255,255,255, 1)",
                borderColor: "#FF0000"
            }
        ]
    }

});