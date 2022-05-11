from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.http import JsonResponse
import time


# Create your views here.

def index(request):
    return render(request, "posts/index.html")


def posts(request):
    # Get start and end points
    x = int(request.GET.get("start") or 0)
    y = int(request.GET.get("end") or (x + 9))

    data = []
    for i in range(x, y + 1):
        data.append(f"Post #{i}")

    # Artificially delay speed of response (unit in seconds)
    time.sleep(1)

    # return list of posts
    return JsonResponse({
        "posts": data
    })
