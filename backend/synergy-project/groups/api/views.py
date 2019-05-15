from rest_framework import viewsets

from groups.models import Group
from .serializers import GroupSerializer

class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()