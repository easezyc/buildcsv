function pie(keyjson,numjson,keyn,numn)
{
	var ii=0;
	$("#mannn").empty();
	for(k in keyjson)
	{
		var m=new Map();
		title=k;
		var key = new Set(data[k]);
		for(x of key)
		{
			var array=[];
			for(var i=0;i<numn;i++)
			{
				array[i]=0;
			}
			json={"value":array , "name":x};
			m.set(x,json);
		}
		j=0;
		tit=[]
		var max,min,mark,ttile="";
		for(key1 in numjson)
		{
			title=title+"-"+key1.replace("#V","");
			tarray=numjson[key1];
			tit[j]=key1;
			if(j<=1){
					max=m.get(data[k][0]).value[j];
					min=m.get(data[k][0]).value[j];
					ttitle=key1;
				}
			for(i=0;i<data[k].length;i++)
			{
				m.get(data[k][i]).value[j]+=parseInt(tarray[i]);
				if(j<=1)
				{
					if(max<m.get(data[k][i]).value[j])max=m.get(data[k][i]).value[j];
					if(min>m.get(data[k][i]).value[j])min=m.get(data[k][i]).value[j];
				}
			}
			j++;
		}
		result=new Array();
		for (var x of key) { // 遍历Map  
			result.push(m.get(x));  
		}
		if(tit.length>1)
		{
			mark=1;
		}
		else{
			mark=0;
		}
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
				formatter: function (obj) {
					var value = obj.value;
					var str="";
					for(i=0;i<tit.length;i++)
					{
						str=str+tit[i].replace("#V","")+":"+value[i]+"<br>";
					}
					return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
						+ obj.name 
						+ '</div>'
						+  str;
				}
			},
			visualMap: [
			{
				left: 'right',
				bottom: '5%',
				dimension: mark,
				min: min,
				max: max,
				itemHeight: 120,
				calculable: true,
				precision: 0.1,
				text: [ttitle.replace("#V","")],
				textGap: 30,
				textStyle: {
					color: '#fff'
				},
				inRange: {
					colorLightness: [0, 1]
				},
				outOfRange: {
					color: ['rgba(255,255,255,.2)']
				},
				controller: {
					inRange: {
						color: ['#c23531']
					},
					outOfRange: {
						color: ['#444']
					}
				}
			}
		],
			series : [
				{
					name:'访问来源',
					type:'pie',
					radius : '55%',
					center: ['50%', '50%'],
					data:
						result
					.sort(function (a, b) { return a.value[0] - b.value[0]}),
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
		str="<div style=\"height:400px;width:600px;\" id=\"draw"+ii+"\"></div>";
		$("#mannn").append(str);
		var myChart = echarts.init(document.getElementById('draw'+ii));
		myChart.setOption(option);
		ii++;
	}
}
function rectangle(keyjson,numjson,keyn,numn)
{
	var ii=0;
	$("#mannn").empty();
	for(k in keyjson)
	{
		var m=new Map();
		title=k;
		var key = new Set(data[k]);
		for(x of key)
		{
			var array=[];
			for(var i=0;i<numn;i++)
			{
				array[i]=0;
			}
			json={"value":array , "name":x};
			m.set(x,json);
		}
		j=0;
		tit=[]
		var max,min,mark,ttile="";
		for(key1 in numjson)
		{
			title=title+"-"+key1.replace("#V","");
			tarray=numjson[key1];
			tit[j]=key1;
			if(j<=1){
					max=m.get(data[k][0]).value[j];
					min=m.get(data[k][0]).value[j];
					ttitle=key1;
				}
			for(i=0;i<data[k].length;i++)
			{
				m.get(data[k][i]).value[j]+=parseInt(tarray[i]);
				if(j<=1)
				{
					if(max<m.get(data[k][i]).value[j])max=m.get(data[k][i]).value[j];
					if(min>m.get(data[k][i]).value[j])min=m.get(data[k][i]).value[j];
				}
			}
			j++;
		}
		result=new Array();
		for (var x of key) { // 遍历Map  
			result.push(m.get(x));  
		}
		if(tit.length>1)
		{
			mark=1;
		}
		else{
			mark=0;
		}
		option = {
		title: {
			text: title,
			left: 'center'
		},
		tooltip : {
				trigger: 'item',
				formatter: function (obj) {
					var value = obj.value;
					var str="";
					for(i=0;i<tit.length;i++)
					{
						str=str+tit[i].replace("#V","")+":"+value[i]+"<br>";
					}
					return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
						+ obj.name 
						+ '</div>'
						+  str;
				}
			},
		visualMap: [
			{
				left: 'right',
				bottom: '5%',
				dimension: mark,
				min: min,
				max: max,
				itemHeight: 120,
				calculable: true,
				precision: 0.1,
				text: [ttitle.replace("#V","")],
				textGap: 30,
				textStyle: {
					color: '#fff'
				},
				inRange: {
					colorLightness: [0, 0.8]
				},
				outOfRange: {
					color: ['rgba(255,255,255,.2)']
				},
				controller: {
					inRange: {
						color: ['#c23531']
					},
					outOfRange: {
						color: ['#444']
					}
				}
			}
		],
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
		str="<div style=\"height:400px;width:600px;\" id=\"draw"+ii+"\"></div>";
		$("#mannn").append(str);
		var myChart = echarts.init(document.getElementById('draw'+ii));
		myChart.setOption(option);
		ii++;
	}
	
	/*index=$('input[name="data-type-key"]:checked').val();
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
	var myChart = echarts.init(document.getElementById('mannn'));
	myChart.setOption(option);*/
}
function map()
{

}
function histogram()
{

}
function scatterdiagram()
{
	index=$('input[name="data-type-key"]:checked').val();
	num=$('input[name="data-type-num"]:checked').val();
	var result = []
	var keys = data[index];
	var vals = data[num];
	for (var i=0; i<keys.length; i++){
		result.push([keys[i],vals[i]]);
	}
	var title = index +" - "+ num;
	option = {
	    title: {
	        text: title,
	        x: 'center',
	        y: 0
	    },
	    tooltip: {
	        formatter: function (params) {
	        	return index+":"+params.value[0]+","+num+":"+params.value[1];
	        }
	    },
	    xAxis: {
	    	type: 'value',
	    	name: index
	    },
	    yAxis: {
	    	type: 'value',
	    	name: num
	    },
	    series: 
	        {
	            type: 'scatter',
	            xAxisIndex: 0,
	            yAxisIndex: 0,
	            data: result         
	        }
	};
	var myChart = echarts.init(document.getElementById('mannn'));
	myChart.setOption(option);
}
function linechart()
{
	index=$('input[name="data-type-key"]:checked').val();
	num=$('input[name="data-type-num"]:checked').val();
	var title = index +" - "+ num;
	var keys = data[index];
	var vals = data[num];
	var result = [];
	var finalKeys = [];
	var finalVals = [];
	for (var i=0; i<keys.length; i++){
		var name = keys[i];
		var value = vals[i];
		var ind = $.inArray(name,finalKeys);
		if (ind == -1){
			finalKeys.push(name)
			finalVals.push(value)
		} else {
			finalVals[ind] = finalVals[ind] + value;
		}		
	}		
	for (var i = 0; i<finalKeys.length; i++){
		result.push({
			name: finalKeys[i],
			value: finalVals[i]	
		});	
	}
	option = {
	    title: {
	        text: title
	    },
	    tooltip: {
	        trigger: 'axis',
	        formatter: function (params) {
	        	return params[0].name+" - "+params[0].value
	        },
	        axisPointer: {
	            animation: false
	        }
	    },
	    xAxis: {
	    	name: index,
            type : 'category',
            boundaryGap : false,
            data : finalKeys
        },
	    yAxis: {
	    	name: num,
	        type: 'value',
	        boundaryGap: [0, '100%'],
	        splitLine: {
	            show: false
	        }
	    },
	    series: [{
	        name: '模拟数据',
	        type: 'line',
	        showSymbol: false,
	        hoverAnimation: false,
	        data: result
	    }]
	};
	var myChart = echarts.init(document.getElementById('mannn'));
	myChart.setOption(option);
}