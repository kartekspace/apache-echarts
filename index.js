// Import stylesheets
import './style.css';
import clusterdata from './cluster-data.json';

import clusterdatamin from './cluster-data-min.json';

import * as echarts from 'echarts';

var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();

// Specify the configuration items and data for the chart
var option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      data: [clusterdata],
      left: '2%',
      right: '2%',
      top: '8%',
      bottom: '20%',
      symbol: 'emptyCircle',
      orient: 'vertical',
      expandAndCollapse: true,
      label: {
        position: 'top',
        rotate: -90,
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9
      },
      leaves: {
        label: {
          position: 'bottom',
          rotate: -90,
          verticalAlign: 'middle',
          align: 'left'
        }
      },
      animationDurationUpdate: 750
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);

console.log(clusterdata);

setTimeout(function(){
  myChart.hideLoading();
},2000);

document.getElementById("reload").addEventListener("click", function() {
  option.series = [clusterdatamin];
  myChart.setOption(option);
});

document.getElementById("reset").addEventListener("click", function() {
  option.series = [clusterdata];
  myChart.setOption(option);
});