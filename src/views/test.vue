<template>
  <div id="app">
		
    
    <hr/>

    <div  ref="chart" class="chart mrl-550"></div>
		   
  </div>
	
</template>

<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>

<script>

import ApexCharts from "apexcharts/dist/apexcharts.js";

export default {
  name: "App",
  mounted() {
    // code from Example: https://apexcharts.com/javascript-chart-demos/area-charts/spline/
    var options = {
      chart: {
        height: 600,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      series: [
        {
          name: "จำนวนผู้พัก",
          data: [31, 40, 150, 51, 42, 109, 100, 30, 5, 4, 8, 9]
        },
        {
          name: "รายรับ",
          data: [11, 32, 45, 32, 34, 52, 41,31, 40, 150, 51, 51]
				},
				 {
          name: "series3",
          data: [5, 10, 180, 50, 34, 52, 60,34, 52, 41,31, 40]
        }
      ],

      xaxis: {
        type: "Sting",
        categories: [
          "มกรา",
          "กุมภาพัน",
          "มีนาคม",
          "เมษายน",
          "พฤษภาคม",
				 "มิถุนายน",
				 "มีนาคม",
				 "สิงหาคม",
				 "กันยายน",
				 "ตุลาคม",
				 "พฤศจิกายน",
				 "ธันวาคม",
        ]
      },
     
    };

    if (this.$refs.chart) {
      // HTML element exists
      var chart = new ApexCharts(this.$refs.chart, options);
      chart.render();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chart {
  width: 50%;
}
</style>
