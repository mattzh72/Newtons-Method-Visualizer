function addNewRow(iter, zAprox, fX, fPX, initX) {
    var table = document.getElementById("output");
    var row = table.insertRow();
    var newtonEq = row.insertCell(0);

    prettyPrintEverything(newtonEq, zAprox, fX, fPX, initX, iter);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function latexify(s) {
    var node = math.parse(s);
    return node ? node.toTex({
        parenthesis: parenthesis,
        implicit: implicit
    }) : '';
}

function prettyPrintEverything(nEq, zApr, funcX, funcPrimeX, x1, iterCount) {
    zApr = zApr.toPrecision(3);
    funcX = funcX.toPrecision(3);
    funcPrimeX = funcPrimeX.toPrecision(3);
    x1 = x1.toPrecision(3);
    
    nEq.innerHTML = '<p1>$$' + "x_{"+ (iterCount) + "}=" +  latexify(x1) + " - (" + latexify(funcX) + ")/(" + latexify(funcPrimeX) + ')=' + latexify(zApr) + '$$</p1>';
}

function addFinalRow(iter, answer){
    var table = document.getElementById("output");
    var row = table.insertRow();
    var ans = row.insertCell(0);
    
    ans.innerHTML = '<p1>$$' + "x_{" + iter + "}=" + latexify(answer.toPrecision(5)) + '$$</p1>';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}