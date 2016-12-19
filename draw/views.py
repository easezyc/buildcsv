from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import os
import csv
import json
import xlrd
# Create your views here.
def index(request):
	return render(request,'index.html')

def pie(request):
	return render(request,'picture/pie.html')
	
def rectangle(request):
	return render(request,'picture/rectangle.html')
	
def scatterdiagram(request):
	return render(request,'picture/scatterdiagram.html')
	
def linechart(request):
	return render(request,'picture/linechart.html')

def histogram(request):
	return render(request,'picture/histogram.html')
	
def map(request):
	return render(request,'picture/map.html')
	
@csrf_exempt
def uploadify_script(request):  
	ret="0"          
	file = request.FILES.get("Filedata",None)          
	if file:              
		if _upload(file):  
			result = handle_csv()
			response=HttpResponse(json.dumps(result))  
			response['Content-Type']="application/json"
		else:
			response=HttpResponse("no")
	return response 
	
def _upload(file):    
    if file:
        name = file.name.split('.')[1]
        if not file:
            return False
        print(name)
        if name == "csv" or  name == "xlsx" or name=="xls" :
            destination = open(os.path.join(".\\upload",u'2.'+name),'wb+')# 打开特定的文件进行二进制的写操作
            for chunk in file.chunks():# 分块写入文件
                destination.write(chunk)
            destination.close()
            if name == "xlsx" or name=="xls" :
                xlsx2csv(name)
            return True
        else:
            return False

def xlsx2csv(name):
    wb = xlrd.open_workbook(".\\upload\\2."+name)
    sh = wb.sheet_by_index(0)
    your_csv_file = open('.\\upload\\2.csv', 'w', newline='')
    wr = csv.writer(your_csv_file, quoting=csv.QUOTE_ALL)
    rownum = 0
    while rownum < sh.nrows:
        print(sh.row_values(rownum))
        wr.writerow(sh.row_values(rownum))
        rownum = rownum + 1
    your_csv_file.close()

def handle_csv():
    with open(".\\upload\\2.csv", "r")as csvfile:
        firstline= csvfile.readline().replace("\"","")
        print(firstline)
        firstline=firstline.strip('\n')
        keyarr=str(firstline).split(',')
        result={}
        for i in keyarr:
            result[i]=[]
        for line in csvfile.readlines():
            line = line.replace("\"","")
            line=line.strip('\n')
            tmparr = line.split(',')
            i = 0
            for t in tmparr:
                if (i < len(keyarr)):
                    result[keyarr[i]].append(t)
                i = i +1
    return result