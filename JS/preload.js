//netwons method
var x0;
var TOLER;
var MAXITS = 50;
var f;
var fprime;
var zeroApprox;

//chart general
var ctx;
var chart;

//chart plotting
var fpoints = [];
var approxLinePoints = [];
var zeroApproxPoints = [];
var vertLinePoints = [];
var zeroOfLinEq;

//sizing
var CHART_X_MIN;
var CHART_X_MAX;
var CHART_Y_MIN;  
var CHART_Y_MAX;

//outputting
var parenthesis = 'keep';
var implicit = 'hide';
var outputData = [];

//timeouts
var timeouts = [];

function setVars(e) {
    if (e.keyCode == 13) {
        preload();
    }
}

function preload(){
    reset();
    
    f = document.getElementById("f").value;
    x0 = math.eval(document.getElementById("init").value);
    zeroApproxPoints.push(x0);
    TOLER = math.eval(document.getElementById("TOLER").value);
    
    var table = document.getElementById("output");
    table.insertRow().innerHTML = '<p1>$$x_0 =' + x0 + '$$</p1>';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

    
    newtonMethod();
    
    var tempArr = [];
    for (var i = 0; i< zeroApproxPoints.length; i++){
        tempArr.push(math.eval(f, scope = {x: zeroApproxPoints[i]}));
    }
        
    
    CHART_Y_MAX = Math.ceil(Math.max.apply(Math, tempArr));
    CHART_Y_MIN = Math.ceil(Math.min.apply(Math, tempArr));
    CHART_X_MIN = Math.ceil(Math.min.apply(Math, zeroApproxPoints));
    CHART_X_MAX = Math.ceil(Math.max.apply(Math, zeroApproxPoints));
    
    if( CHART_X_MAX < 1)
        CHART_X_MAX = 1;
    
    if( CHART_X_MAX > CHART_X_MAX + zeroApprox)
        CHART_X_MAX = CHART_X_MAX - zeroApprox;
    
    if( CHART_X_MIN > -1)
        CHART_X_MIN = -1;
    
    if( CHART_X_MIN < CHART_X_MIN + zeroApprox)
        CHART_X_MIN = CHART_X_MIN - zeroApprox;
        
    if( CHART_Y_MAX < 2)
        CHART_Y_MAX = 2;
    
    if( CHART_Y_MIN > -2)
        CHART_Y_MIN = -2;
    
        
    fpoints = graphFunc(f, CHART_X_MIN, CHART_X_MAX, CHART_Y_MIN, CHART_Y_MAX, fpoints, 0.01);
    approxLinePoints = graphFunc(getEqofTanLine(f, zeroApproxPoints[0], false), CHART_X_MIN, CHART_X_MAX, CHART_Y_MIN, CHART_Y_MAX, approxLinePoints, 0.01);
    makeChart(CHART_X_MIN, CHART_X_MAX, CHART_Y_MIN, CHART_Y_MAX, zeroApprox);
    
    updateMyChart(0);
}

function reset(){
    fpoints = [];
    approxLinePoints = [];
    zeroApproxPoints = [];
    vertLinePoints = [];
    outputData = [];

    var canvas = document.getElementById("newtonChart");
    canvas.remove(0);
    var canvasContainer = document.getElementById("chart-container");
    canvasContainer.innerHTML = "<canvas id='newtonChart' width='250px' height='200px'> </canvas>";
    ctx = document.getElementById("newtonChart");
    
    
    var outputTable = document.getElementById('output');
    var rowCount = outputTable.rows.length;
    while (--rowCount) outputTable.deleteRow(rowCount); 


    for (var i=0; i<timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    
    timeouts = [];
}
