from rest_framework import serializers

from groups.models import Group
# from people.api.serializers import PeopleSerializer

class GroupSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Group
        fields = ('id', 'name', 'description')