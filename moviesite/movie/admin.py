from django.contrib import admin

from .models import Movie
from .models import Actor
from .models import Relation

admin.site.register(Movie)
admin.site.register(Actor)
admin.site.register(Relation)

# Register your models here.
