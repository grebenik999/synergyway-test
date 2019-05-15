from rest_framework import viewsets

from people.models import People
from .serializers import PeopleSerializer

class PeopleViewSet(viewsets.ModelViewSet):
    serializer_class = PeopleSerializer
    queryset = People.objects.all()