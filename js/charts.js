var dataStromaufnahme = []
var dataStromsensoren = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var dataTemperatur = []
var dataLeistung = []
var dataAkku = [100]

function getNewSeries(data, date, yrange) {
    data.push({
        x: date,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    })
}

function getNewStromsensoren(data) {
    for (var i = 0; i < data.length; i++) {
        data[i] = Math.floor(Math.random() * 4) + 1
    }
}

var optionsStromaufnahme = {
    series: [{
        data: dataStromaufnahme.slice()
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
                speed: 400
            }
        },
        events: {
            animationEnd: function (chartCtx, options) {
                if (dataStromaufnahme.length % 150 === 0) {
                    dataStromaufnahme = dataStromaufnahme.slice(dataStromaufnahme.length - 140, dataStromaufnahme.length)
                    chartCtx.updateOptions({
                        series: [
                            {data: dataStromaufnahme.slice()}
                        ]
                    }, false, false)
                }
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
        text: 'Gesamt-Stromaufnahme',
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
        max: 12,
        labels: {
            formatter: function (value) {
                return value.toFixed(1) + "A"
            },
        }
    },
    legend: {
        show: false
    },
};
var optionsLeistung = {
    series: [{
        data: dataLeistung
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
                speed: 400
            }
        },
        events: {
            animationEnd: function (chartCtx, options) {
                if (dataLeistung.length % 150 === 0) {
                    dataLeistung = dataLeistung.slice(dataLeistung.length - 140, dataLeistung.length)
                    chartCtx.updateOptions({
                        series: [
                            {data: dataLeistung.slice()}
                        ]
                    }, false, false)
                }
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
        text: 'Gesamt-Leistung',
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
        max: 70,
        labels: {
            formatter: function (value) {
                return value + "W"
            },
        }
    },
    legend: {
        show: false
    },
};
var optionsTemperatur = {
    series: [{
        data: dataTemperatur.slice()
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
                speed: 450
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        events: {
            animationEnd: function (chartCtx, options) {
                if (dataTemperatur.length % 150 === 0) {
                    dataTemperatur = dataTemperatur.slice(dataTemperatur.length - 140, dataTemperatur.length)
                    chartCtx.updateOptions({
                        series: [
                            {data: dataTemperatur.slice()}
                        ]
                    }, false, false)
                }
            }
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
        max: 55,
        labels: {
            formatter: function (value) {
                return value.toFixed(1) + "°C"
            },
        }
    },
    legend: {
        show: false
    },
};
var optionsAkku = {
    series: dataAkku.slice(),
    theme: {
        mode: 'dark'
    },
    chart: {
        height: 350,
        type: 'radialBar',
        background: '#323438',
        toolbar: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 400
            }
        },
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
var optionsStromsensoren = {
    series: [{
        data: dataStromsensoren.slice()
    }],
    theme: {
        mode: 'dark'
    },
    chart: {
        height: 350,
        type: 'bar',
        background: '#323438',
        animations: {
            enabled: false,
            easing: 'linear',
            dynamicAnimation: {
                speed: 250
            }

        },
        toolbar: {
            show: false
        }
    },
    title: {
        text: 'Stromsensoren',
        align: 'center',
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
            distributed: false,
        }
    },
    tooltip: {
        enabled: false
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
            'Servo VR',
            'Servo MR',
            'Servo HR',
            'Servo VL',
            'Servo ML',
            'Servo HL',
            'Spannungswandler R',
            'Spannungswandler L',
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
                return value.toFixed(1) + "A"
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

var chartStromaufnahme = new ApexCharts(document.querySelector("#stromaufnahme"), optionsStromaufnahme);
var chartLeistung = new ApexCharts(document.querySelector("#leistung"), optionsLeistung);
var chartTemperatur = new ApexCharts(document.querySelector("#temperatur"), optionsTemperatur);
var chartAkku = new ApexCharts(document.querySelector("#akku"), optionsAkku);
var chartStromsensoren = new ApexCharts(document.querySelector("#stromsensoren"), optionsStromsensoren);

chartStromaufnahme.render()
chartLeistung.render()
chartTemperatur.render();
chartAkku.render();
chartStromsensoren.render();

// var count = 0
function sampleData() {
    window.setInterval(function () {

        getNewSeries(dataStromaufnahme, Date.now(), {
            min: 0.5,
            max: 3
        })
        getNewSeries(dataTemperatur, Date.now(), {
            min: 21,
            max: 23
        })

        if (count === 2) {
            getNewStromsensoren(dataStromsensoren)
            count = 0
            chartStromsensoren.updateSeries([{
                data: dataStromsensoren.slice()
            }])
        }
        count++

        chartStromaufnahme.updateSeries([{
            data: dataStromaufnahme.slice()
        }])


        chartTemperatur.updateSeries([{
            data: dataTemperatur.slice()
        }])

    }, 500)
}

const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
var count = 0
function processData(values){
    let akkuspannung = values[0] / 1000
    let maxspannung = 12.6
    let minspannung = 11.22
    let stromaufnahme = values[10] / 1000

    let akku = Math.round(invlerp(minspannung, maxspannung, akkuspannung) *100)

    dataAkku[0] = akku
    console.log(akku)
    chartAkku.updateSeries(
        dataAkku
    )

    for(let i = 1; i<=9; i++){
        dataStromsensoren[i-1] = values[i] / 1000
    }
     // if(count === 1){
        chartStromsensoren.updateSeries([{
            data: dataStromsensoren
        }])
        // count = 0
     // }
     // count ++


    dataStromaufnahme.push({
        x: Date.now(),
        y: stromaufnahme
    })
    chartStromaufnahme.updateSeries([{
        data: dataStromaufnahme
    }])


    dataLeistung.push({
        x: Date.now(),
        y: akkuspannung * stromaufnahme
    })
    chartLeistung.updateSeries([{
        data: dataLeistung
    }])
}