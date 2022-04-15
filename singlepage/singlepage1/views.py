from django.shortcuts import render
from django.http import Http404, HttpResponse


# Create your views here.

def index(request):
    return render(request, 'singlepage1/singlePageApplication.html')


texts = ["Text 1", "Text 2", "Text 3"]


def section(request, number):
    if 1 <= number <= 3:
        return HttpResponse(text[number - 1])
    else:
        raise Http404("No such section")
