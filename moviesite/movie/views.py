from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from movie.models import Movie, Actor, Relation
from movie.serializers import MovieSerializer, ActorSerializer, RelationSerializer



# Create your views here.
@csrf_exempt

def movieApi (request):
    if request.method=='GET':
        movieslist=Movie.objects.all()
        movies_serializer= MovieSerializer(movieslist, many=True)
        return JsonResponse(movies_serializer.data, safe=False)

def actorApi (request):
    if request.method=='GET':
        Actorlist=Actor.objects.all()
        actor_serializer= ActorSerializer(Actorlist, many=True)
        return JsonResponse(actor_serializer.data, safe=False)


def sortbytitleApi (request):
    if request.method=='GET':
        movieslist=Movie.objects.all().order_by('title')
        movies_serializer= MovieSerializer(movieslist, many=True)
        return JsonResponse(movies_serializer.data, safe=False)


def sortbydateApi (request):
    if request.method=='GET':
        movieslist=Movie.objects.all().order_by('release_date')
        movies_serializer= MovieSerializer(movieslist, many=True)
        return JsonResponse(movies_serializer.data, safe=False)


def RelationApi (request):
    if request.method=='GET':
        relationlist=Relation.objects.all()
        returnlist=[]
        for x in relationlist:
            returnlist.append({'movie': MovieSerializer(x.movie_id).data,'actor': ActorSerializer(x.actor_id).data})


        ##relation_serializer= RelationSerializer(relationlist, many=True)
        return JsonResponse(returnlist, safe=False)




@csrf_exempt
def incrementVote(request):
    print(request.POST)
    movie = Movie.objects.get(id=request.POST['id'])
    movie.vote += 1
    movie.save()
    return JsonResponse({'status': 'success'})

