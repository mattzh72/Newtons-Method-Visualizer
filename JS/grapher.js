function graphFunc(func, xMin, xMax, yMin, yMax, pointArr, smoothness){
    for (var i = xMin; i < xMax; i = i + smoothness){
        var xVal = zeroApprox + i;
        var yVal = math.eval(func, scope = {x: xVal});
        
        if (yVal >= yMin && yVal <= yMax)
            pointArr.push(new point(xVal, yVal));
    }
    
    return pointArr;
}

function getEqofTanLine(func, p, display){
    var xVal = p;
    var yVal = math.eval(func, scope = {x: xVal}); 
     
    var slope = math.derivative(func, 'x').eval({x: xVal});  
    var constant = yVal - xVal * slope;
    
    
    if (display = false)
        return slope + "*x + " + constant;
    else
        return "y = (" + slope.toPrecision(3) + ")x + (" + constant.toPrecision(3)+ ")";

}

function updateMyChart(index) {
    timeouts.push(setTimeout(function () {
        if (index > zeroApproxPoints.length - 2){
            endSolutionGraph();
            addFinalRow(index+1, zeroApproxPoints[zeroApproxPoints.length - 1]);
            return;
        }
        
        addNewRow(outputData[index][0], outputData[index][1], outputData[index][2], outputData[index][3], outputData[index][4]);
        
        fpoints = [];
        approxLinePoints = [];
        
        approxLinePoints = graphFunc(getEqofTanLine(f, zeroApproxPoints[index]), CHART_X_MIN, CHART_X_MAX, CHART_Y_MIN, CHART_Y_MAX, approxLinePoints, 0.01);
        fpoints = graphFunc(f, CHART_X_MIN, CHART_X_MAX, CHART_Y_MIN, CHART_Y_MAX, fpoints, 0.01);
        
        chart.data.datasets[0].data = fpoints; 
        chart.data.datasets[1].data = approxLinePoints;
        chart.data.datasets[1].label = getEqofTanLine(f, zeroApproxPoints[index], true);
        chart.data.datasets[2].data = vertLinePoints;
        chart.update();
        
        timeouts.push(setTimeout(function(){
            vertLinePoints = [];
            vertLinePoints.push(new point(zeroApproxPoints[index + 1], 0));
            chart.data.datasets[2].data = vertLinePoints;
            chart.data.datasets[2].label = " x = " + zeroApproxPoints[index + 1].toPrecision(3);
            chart.update();
            
            timeouts.push(setTimeout(function(){
                vertLinePoints.push(new point(zeroApproxPoints[index + 1], math.eval(f, scope = {x:zeroApproxPoints[index + 1]})));
                chart.data.datasets[2].data = vertLinePoints;
                chart.update();
            }, 1000));
        }, 1000));
        
        console.log(vertLinePoints);
        updateMyChart(index+1);
    }, 3000));
}

function endSolutionGraph(){
    approxLinePoints = [];
    vertLinePoints.shift();
    chart.data.datasets[1].data = approxLinePoints;
    chart.update();
}


