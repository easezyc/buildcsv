from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import os
import csv
import json
# Create your views here.
def index(request):
	return render(request,'index.html')
	
@csrf_exempt
def uploadify_script(request):  
    ret="0"          
    file = request.FILES.get("Filedata",None)          
    if file:              
        if _upload(file):  
            ret="1"  
        ret="2"  
    result = handle_csv()
    response=HttpResponse(json.dumps(result))  
    response['Content-Type']="application/json"   
    return response 
	
def _upload(file):    
    if file:              
        path='/upload'  
        file_name="1.csv"        
        path_file=os.path.join(path,file_name)  
        if not file:
            return False
        destination = open(os.path.join(".\\upload",u'2.csv'),'wb+')# 打开特定的文件进行二进制的写操作 
        for chunk in file.chunks():# 分块写入文件  
            destination.write(chunk)  
        destination.close()  
        return True  
    return False
	
def handle_csv():
    with open(".\\upload\\2.csv", "r")as csvfile:
        firstline=csvfile.readline()
        keyarr=firstline.split(',')
        result=[]
        for line in csvfile.readlines():
            tmparr = line.split(',')
            i = 0
            retmp = {}
            for t in tmparr:
                if (i < len(keyarr)):
                    retmp[keyarr[i]]= t
                i = i +1
            result.append(retmp)
    return result