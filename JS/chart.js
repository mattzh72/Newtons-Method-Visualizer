function makeChart(xMin, xMax, yMin, yMax, root){
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Graph of f(x)',
                data: fpoints,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgb(255, 0, 78)",
                borderColor: "rgb(255, 0, 78)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgb(255, 0, 78)",
                pointBackgroundColor: "rgba(255, 0, 78, 0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(255, 0, 78)",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                spanGaps: false,
            },
            {
                label: getEqofTanLine(f, zeroApproxPoints[0], true),
                data: approxLinePoints,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgb(174,198,207)",
                borderColor: "rgb(174,198,207)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgb(174,198,207)",
                pointBackgroundColor: "rgba(174,198,207, 0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(174,198,207)",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                spanGaps: false,
            },
            {
                label: " x = " + zeroApproxPoints[0].toPrecision(3),
                data: vertLinePoints,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgb(119,221,119)",
                borderColor: "rgb(119,221,119)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgb(119,221,119)",
                pointBackgroundColor: "rgba(119,221,119,0.4)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(119,221,119)",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                spanGaps: false,
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'top',
                    ticks: {
                        min: xMin + root,
                        max: xMax + root,
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        min: yMin,
                        max: yMax,
                    }
                }]
            },
            responsiveAnimationDuration: 1000,
        },
        
    });  
}