function BarChart(id, title, labels, datasets){
    var barChartData = {
        labels: labels,
        datasets: datasets
    };
    window.addEventListener("load", function(){
        var ctx = document.getElementById(id).getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: title
                }
            }
        });
    });
}

function PieChart(id, title, labels, datasets){
    var config = {
        type: 'pie',
        data: {datasets: datasets,labels: labels},
        options: {
            responsive: true,
            title: {
                display: true,
                text: title
            }
        }
    };

    window.addEventListener("load", function(){
        var ctx = document.getElementById(id).getContext('2d');
	    new Chart(ctx, config);
    });    
}

function ProccessChart(id, code){
    window.addEventListener("load", function(){
        var chart = flowchart.parse(code);
        chart.drawSVG(id, {
            'line-width': 3,
            'maxWidth': 3,
            'line-length': 50,
            'text-margin': 10,
            'font-size': 14,
            'font': 'normal',
            'font-family': 'Helvetica',
            'font-weight': 'normal',
            'font-color': 'black',
            'line-color': 'black',
            'element-color': 'black',
            'fill': 'white',
            'yes-text': 'yes',
            'no-text': 'no',
            'arrow-end': 'block',
            'scale': 1,
            'symbols': {
            'start': {'font-color': 'red','element-color': 'green','fill': 'yellow'},
            'end':{'class': 'end-element'}
            },
            'flowstate' : {
            'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
            'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
            'future' : { 'fill' : '#FFFF99'},
            'request' : { 'fill' : 'blue'},
            'invalid': {'fill' : '#444444'},
            'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
            'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
            }
        });
    });       
}

function FlowChart(id, code){
    window.addEventListener("load", function(){
        var chart = flowchart.parse(code);
        chart.drawSVG(id, {
            'line-width': 3,
            'maxWidth': 3,
            'line-length': 50,
            'text-margin': 10,
            'font-size': 14,
            'font': 'normal',
            'font-family': 'Helvetica',
            'font-weight': 'normal',
            'font-color': 'black',
            'line-color': 'black',
            'element-color': 'black',
            'fill': 'white',
            'yes-text': 'yes',
            'no-text': 'no',
            'arrow-end': 'block',
            'scale': 1,
            'symbols': {
            'start': {'font-color': 'red','element-color': 'green','fill': 'yellow'},
            'end':{'class': 'end-element'}
            },
            'flowstate' : {
            'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
            'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
            'future' : { 'fill' : '#FFFF99'},
            'request' : { 'fill' : 'blue'},
            'invalid': {'fill' : '#444444'},
            'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
            'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
            }
        });
    });       
}