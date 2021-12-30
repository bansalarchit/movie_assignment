from django.conf.urls import url
from movie import views
from movie.models import Relation

urlpatterns=[
    url(r'^movie/$',views.movieApi),
    url(r'^actor/$',views.actorApi),
    url(r'^sortbytitle/$',views.sortbytitleApi),
    url(r'^sortbyreleasedate/$',views.sortbydateApi),
    url(r'^increment/$',views.incrementVote),
    url(r'^relation/$',views.RelationApi)
]