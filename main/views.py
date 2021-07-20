from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'main/index.html')

def portfolio(request):
    return render(request, 'main/portfolio.html')

def service(request):
    return render(request, 'main/services.html')

def about(request):
    return render(request, 'main/about.html')