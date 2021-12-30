from rest_framework import serializers
from movie.models import Movie, Actor, Relation

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model= Movie
        fields = ('id','title','description','release_date',
        'actor','vote'
        )

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model= Actor
        fields = ('id','name','dob','movies'
        )


class RelationSerializer(serializers.ModelSerializer):
    class Meta:
        model= Relation
        fields = ('movie_id','actor_id'
        )


