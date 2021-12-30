from django.db import models

class Movie(models.Model):
    id=models.AutoField(primary_key = True)
    title = models.CharField(max_length=100)
    description=models.TextField(max_length=10000)
    release_date=models.DateField()
    actor=models.IntegerField(default=0)
    vote=models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Actor(models.Model):
    id=models.AutoField(primary_key = True)
    name=models.CharField(max_length=100)
    dob=models.DateField()
    movies=models.IntegerField(default=0)
    

    def __str__(self):
        return self.name

class Relation(models.Model):
    actor_id=models.ForeignKey(Actor, on_delete=models.CASCADE)
    movie_id=models.ForeignKey(Movie, on_delete=models.CASCADE)

    @property
    def name(self):
        return self.actor_id.name
    




# Create your models here.

