var data = []

function getNewSeries(date, yrange) {

    data.push({
        x: date,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })
}

function removeData() {
    // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
    if (data.length % 60 === 0) {
        console.log(data)
    }
    if (data.length > 120) {
        data.shift()
    }
    // if(data.length > 160){
    //     console.log(data)
    //     // data = data.slice(data.length - 130, data.length);
    //     console.log(data)
    // }
}

var optionsTemperatur = {
    series: [{
        data: data.slice()
    }],
    theme: {
        mode: 'dark'
    },
    chart: {
        id: 'realtime',
        height: 350,
        type: 'area',
        background: '#323438',
        fontFamily: 'Roboto, sans-serif',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 500
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: '2'
    },
    title: {
        text: 'Temperatur',
        align: 'center',
    },
    grid: {
        show: true,
        borderColor: '#4f4f4f',
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
    },
    tooltip: {
        enabled: false
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: 60000,
        labels: {
            formatter: function (value, timestamp) {
                date = new Date(timestamp)
                return date.getHours().toString().padStart(2, '0') + ":" +
                    date.getMinutes().toString().padStart(2, '0') + ":" +
                    date.getSeconds().toString().padStart(2, '0') // The formatter function overrides format property
            },
        },
        tickAmount: 10,
    },
    yaxis: {
        min: 0,
        max: 100,
        labels: {
            formatter: function (value) {
                return value + "°C"
            },
        }
    },
    legend: {
        show: false
    },
};
var optionsAkku = {
    series: [90],
    theme: {
        mode: 'dark'
    },
    chart: {
        height: 350,
        type: 'radialBar',
        background: '#323438',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -360,
            endAngle: 0,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#323438',
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#999',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#999',
                    fontSize: '17px'
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val) + "%";
                    },
                    color: '#fff',
                    fontSize: '36px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Akkustand'],
};
var optionsStromsensren = {
    series: [{
        data: [0.5, 0.3, 0.6, 0.2, 0.7, 0.5, 2, 1.4, 0.3]
    }],
    theme: {
        mode: 'dark'
    },
    chart: {
        height: 350,
        type: 'bar',
        background: '#323438',
        toolbar: {
            show: false
        }
    },
    title: {
        text: 'Stromsensoren',
        align: 'center',
    },
    // colors: colors,
    plotOptions: {
        bar: {
            columnWidth: '50%',
            distributed: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#4f4f4f'
    },
    xaxis: {
        categories: [
            'Servo VL',
            'Servo ML',
            'Servo HL',
            'Servo VR',
            'Servo MR',
            'Servo HR',
            'Spannungswandler L',
            'Spannungswandler R',
            ['Sensoren', 'Lichter']

        ],
        labels: {
            style: {
                // colors: colors,
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        min: 0,
        max: 5,

        labels: {
            formatter: function (value) {
                return value.toFixed(2) + "A"
            },
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#6BD1D1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },

};
var chartTemperatur = new ApexCharts(document.querySelector("#temperatur"), optionsTemperatur);
var chartAkku = new ApexCharts(document.querySelector("#akku"), optionsAkku);
var chartStromsensoren = new ApexCharts(document.querySelector("#stromsensoren"), optionsStromsensren);

chartTemperatur.render();
chartAkku.render();
chartStromsensoren.render();

window.setInterval(function () {


    // chart.animations.enabled = true;
    getNewSeries(Date.now(), {
        min: 60,
        max: 65
    })

    chartTemperatur.updateSeries([{
        data: data
    }])
    // chart2.updateSeries([{
    //     data: data
    // }])

}, 500)