function pie()
{
	index=$('input[name="data-type-key"]:checked').val();
	num=$('input[name="data-type-num"]:checked').val();
	var m=new Map();
	var key = new Set(data[index]);
	for(x of key)
	{
		json={"value":0 , "name":x}
		m.set(x,json);
	}
	var i=0;
	for(;i<data[index].length;i++)
	{
		m.get(data[index][i]).value+=parseInt(data[num][i]);
	}
	result=new Array();
	for (var x of key) { // 遍历Map  
		result.push(m.get(x));  
	}
	title=index+"-"+num;
	option = {
		backgroundColor: '#2c343c',

		title: {
			text: title,
			left: 'center',
			top: 20,
			textStyle: {
				color: '#ccc'
			}
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series : [
			{
				name:'访问来源',
				type:'pie',
				radius : '55%',
				center: ['50%', '50%'],
				data:
					result
				.sort(function (a, b) { return a.value - b.value}),
				roseType: 'angle',
				label: {
					normal: {
						textStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						},
						smooth: 0.2,
						length: 10,
						length2: 20
					}
				},
				itemStyle: {
					normal: {
						color: '#c23531',
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	var myChart = echarts.init(document.getElementById('main'));
	myChart.setOption(option);
}
function rectangle()
{
	index=$('input[name="data-type-key"]:checked').val();
	num=$('input[name="data-type-num"]:checked').val();
	var m=new Map();
	var key = new Set(data[index]);
	for(x of key)
	{
		json={"value":0 , "name":x}
		m.set(x,json);
	}
	var i=0;
	for(;i<data[index].length;i++)
	{
		m.get(data[index][i]).value+=parseInt(data[num][i]);
	}
	result=new Array();
	for (var x of key) { // 遍历Map  
		result.push(m.get(x));  
	}
	title=index+"-"+num;
	option = {
		title: {
			text: title,
			left: 'center'
		},
		tooltip: {},
		series: [{
			name: title,
			type: 'treemap',
			visibleMin: 300,
			data: result,
			leafDepth: 2,
			levels: [
				{
					itemStyle: {
						normal: {
							borderColor: '#555',
							borderWidth: 4,
							gapWidth: 4
						}
					}
				},
				{
					colorSaturation: [0.3, 0.6],
					itemStyle: {
						normal: {
							borderColorSaturation: 0.7,
							gapWidth: 1,
							borderWidth: 2
						}
					}
				},
				{
					colorSaturation: [0.3, 0.5],
					itemStyle: {
						normal: {
							borderColorSaturation: 0.6,
							gapWidth: 1
						}
					}
				},
				{
					colorSaturation: [0.3, 0.5]
				}
			]
		}]
	};
	var myChart = echarts.init(document.getElementById('main'));
	myChart.setOption(option);
}
function map()
{

}
function histogram()
{

}
function scatterdiagram()
{

}
function linechart()
{

}