var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['排名']
            },
            xAxis: {
                data: ["2000","2005","2010","2015","2020",]
            },
            yAxis: {},
            series: [{
                name: '排名',
                type: 'line',
                data: [6, 9, 8, 8, 7]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);