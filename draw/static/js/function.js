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
		var name0=0;
		tit=[]
		var max,min,mark,ttile="";
		var name=[];
		for(key1 in numjson)
		{
			title=title+"-"+key1.replace("#V","");
			name[name0]=key1.replace("#V","");
			name0++;
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
		
    var keyname=[];keynum=0;
    var arr = new Array();         //先声明一维
    for(var x of result){
        keyname[keynum]=x.name;
        arr[keynum]=new Array();    //在声明二维
        for(var e=0;e<result.length;e++){
            arr[keynum][e]=result[e].value[keynum];
        }
        keynum++;
    }
    var seri=new Array();
   
          for(var q=0;q<result.length;q++){
              json={name:name[q],
            type:'bar',
            data:arr[q]}
            seri.push(json);
    }

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:keyname
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:result
        }
    ]
};
    
   
    console.log(arr);
    str="<div style=\"height:400px;width:600px;\" id=\"draw"+ii+"\"></div>";
		$("#mannn").append(str);
		var myChart = echarts.init(document.getElementById('draw'+ii));
		myChart.setOption(option);
		ii++;
    
    }

}
function histogram(keyjson,numjson,keyn,numn)
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
		var name0=0;
		tit=[]
		var max,min,mark,ttile="";
		var name=[];
		for(key1 in numjson)
		{
			title=title+"-"+key1.replace("#V","");
			name[name0]=key1.replace("#V","");
			name0++;
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
		
    var keyname=[];keynum=0;
    var arr = new Array();         //先声明一维
    for(var x of result){
        keyname[keynum]=x.name;
        arr[keynum]=new Array();    //在声明二维
        for(var e=0;e<result.length;e++){
            arr[keynum][e]=result[e].value[keynum];
        }
        keynum++;
    }
    var seri=new Array();
   
          for(var q=0;q<result.length;q++){
              json={name:name[q],
            type:'bar',
            data:arr[q]}
            seri.push(json);
    }
option = {
    tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:name
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            
            data : keyname
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : seri
};
    console.log(keyname);
    console.log(name);
    console.log(arr);
    console.log(seri);
    str="<div style=\"height:400px;width:600px;\" id=\"draw"+ii+"\"></div>";
		$("#mannn").append(str);
		var myChart = echarts.init(document.getElementById('draw'+ii));
		myChart.setOption(option);
		ii++;
    
    }
}
function scatterdiagram(keyjson,numjson,keyn,numn)
{
	$("#mannn").empty(); 
	str="<div style=\"height:480px;width:600px;\" id=\"mydraw\"></div>";
	$("#mannn").append(str);
	if (numn <2){
		alert("散点图需要选定两个以上的\"值\"参数。");
		return;
	}
	var result = [];
	var keys = [];
	for (key in numjson){
		keys.push(key);
		var nums = numjson[key];
		for (var k=0; k<nums.length; k++){
			if (k >= result.length){
				result.push([nums[k]])
			}else{
				result[k].push(nums[k])
			}
		}
	}
	for (key in keyjson){
		keys.push(key)
		var nums = keyjson[key];
		for (var k=0; k<nums.length; k++){
			result[k].push(nums[k])
		}
	}
	var itemStyle = {
	    normal: {
	        opacity: 0.8,
	        shadowBlur: 10,
	        shadowOffsetX: 0,
	        shadowOffsetY: 0,
	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	    }
	};
	var visualMap =[];
	if (numn>=3){
		var data = numjson[keys[2]];
		var min = data[0];
		var max = data[0];
		for (var i=0; i<data.length; i++ ){
			if (parseInt(data[i])>max) {
				max =parseInt(data[i]);
			}
			if (parseInt(data[i])<min) {
				min =parseInt(data[i]);
			}
		}
		visualMap.push({
	            left: 'right',
	            top: '10%',
	            dimension: 2,
	            min: min,
	            max: max,
	            itemWidth: 30,
	            itemHeight: 120,
	            calculable: true,
	            precision: 0.1,
	            text: ['圆形大小：'+keys[2].replace('#V','')],
	            textGap: 30,
	            textStyle: {
	                color: '#fff'
	            },
	            inRange: {
	                symbolSize: [10, 70]
	            },
	            outOfRange: {
	                symbolSize: [10, 70],
	                color: ['rgba(255,255,255,.2)']
	            },
	            controller: {
	                inRange: {
	                    color: ['#80F1BE']
	                },
	                outOfRange: {
	                    color: ['#444']
	                }
	            }
	        });
	}
	if (numn>=4){
		var data = numjson[keys[3]];
		var min = data[0];
		var max = data[0];
		for (var i=0; i<data.length; i++ ){
			if (parseInt(data[i])>max) {
				max =parseInt(data[i]);
			}
			if (parseInt(data[i])<min) {
				min =parseInt(data[i]);
			}
		}
		visualMap.push({
	            left: 'right',
	            bottom: '5%',
	            dimension: 3,
	            min: min,
	            max: max,
	            itemHeight: 120,
	            calculable: true,
	            precision: 0.1,
	            text: ['明暗：'+keys[3].replace('#V','')],
	            textGap: 30,
	            textStyle: {
	                color: '#fff'
	            },
	            inRange: {
	                colorLightness: [1, 0.5]
	            },
	            outOfRange: {
	                color: ['rgba(255,255,255,.2)']
	            },
	            controller: {
	                inRange: {
	                    color: ['#80F1BE']
	                },
	                outOfRange: {
	                    color: ['#444']
	                }
	            }
	        });
	}
	option = {
	    backgroundColor: '#404a59',
	    color: ['#80F1BE'],
	    legend: {
	        y: 'top',
	        textStyle: {
	            color: '#fff',
	            fontSize: 16
	        }
	    },
	    grid: {
	        x: '10%',
	        x2: 150,
	        y: '18%',
	        y2: '10%'
	    },
	    tooltip: {
	        padding: 10,
	        backgroundColor: '#222',
	        borderColor: '#777',
	        borderWidth: 1,
	        formatter: function (obj) {
	          var value = obj.value;
	          var tmpstr = '';
	          for (var i=0; i<keys.length; i++){
	          	tmpstr = tmpstr + keys[i].replace('#V','')+': '+value[i]+'<br>';
	          }
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + '</div>'
                + tmpstr;
	        }
	    },
	    xAxis: {
	        type: 'value',
	        name: keys[0].replace('#V',''),
	        nameGap: 16,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 14
	        },
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#eee'
	            }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        name: keys[1].replace('#V',''),
	        nameLocation: 'end',
	        nameGap: 20,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 16
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#eee'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    },
	    visualMap: visualMap,
	    series: {
	            name: '北京',
	            type: 'scatter',
	            itemStyle: itemStyle,
	            data: result
	        }
	};
	var myChart = echarts.init(document.getElementById('mydraw'));
	myChart.setOption(option);
	/*$("#mannn").empty(); 
	if (keyn != 0){
		alert("散点图不允许选定\"键\"参数。")
	}
	if (numn <2){
		alert("散点图需要选定两个以上的\"值\"参数。")
	}
	var i = 0;
	var j = 0;
	for (key1 in numjson){
		j = 0;
		for (key2 in numjson){
			if (i<j){
				var title = key1.replace("#V","")+"-"+key2.replace("#V","");
				var result = []
				var x = numjson[key1];
				var y = numjson[key2];
				console.log(x,y)
				for (var k=0; k<x.length; k++){
					result.push([x[k],y[k]]);
				}
				option = {
				    title: {
				        text: title,
				        x: 'center',
				        y: 0
				    },
				    tooltip: {
				        formatter: function (params) {
				        	return key1+":"+params.value[0]+","+key2+":"+params.value[1];
				        }
				    },
				    xAxis: {
				    	type: 'value',
				    	name: key1.replace("#V","")
				    },
				    yAxis: {
				    	type: 'value',
				    	name: key2.replace("#V","")
				    },
				    series: 
				        {
				            type: 'scatter',
				            xAxisIndex: 0,
				            yAxisIndex: 0,
				            data: result         
				        }
				};
				str="<div style=\"height:400px;width:600px;\" id=\"draw"+i+j+"\"></div>";
				$("#mannn").append(str);
				var myChart = echarts.init(document.getElementById('draw'+i+j));
				myChart.setOption(option);
			}
			j++
		}
		i++;
	}*/
}
function linechart(keyjson,numjson,keyn,numn)
{
	$("#mannn").empty();
	var keyarr = [];
	var numarr = []; 
	for (key in keyjson){
		keyarr.push(key);
	}
	for (key in numjson){
		numarr.push(key);
	}
	for (var i=0; i<keyn; i++){
		var xArr=[];
		var yArr=[];
		for (var j=0; j<numn; j++){
			yArr.push([]);
		}
		var tmparr = keyjson[keyarr[i]];
		for (var j=0; j<tmparr.length; j++){
			var ind = $.inArray(tmparr[j],xArr);
			if (ind == -1){
				xArr.push(tmparr[j]);
				for (var k=0; k<numn; k++){
					yArr[k].push(parseInt(numjson[numarr[k]][j]));
				}
			}else {
				for (var k=0; k<numn; k++){
					var tmp = numjson[numarr[k]][j];
					yArr[k][ind] = yArr[k][ind] + parseInt(tmp);
				}
			}
		}
		var series = [];
		for (var j=0; j<numn; j++){
			series.push({
		            name:numarr[j].replace("#V",""),
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:yArr[j]
		        });
		}
		var title = keyarr[i];
		for (var j=0; j<numn; j++){
			title = title + '-' + numarr[j].replace("#V","");
		}
		option = {
		    title: {
		        text: title
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            name: keyarr[i],
			        nameGap: 0,
			        nameTextStyle: {
			            color: '#000',
			            fontSize: 9
			        },
		            boundaryGap : false,
		            data : xArr
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : series
		};
		str="<div style=\"height:400px;width:600px;\" id=\"mydraw"+i+"\"></div>";
		$("#mannn").append(str);
		var myChart = echarts.init(document.getElementById('mydraw'+i));
		myChart.setOption(option);

	}

	/*index=$('input[name="data-type-key"]:checked').val();
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
	myChart.setOption(option);*/
}