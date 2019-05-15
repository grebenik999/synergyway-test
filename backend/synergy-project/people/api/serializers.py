from rest_framework import serializers

from people.models import People
from groups.api.serializers import GroupSerializer


class PeopleSerializer(serializers.ModelSerializer):
    group_name = serializers.CharField(source='group.name', read_only=True)
    # created = serializers.DateTimeField(input_formats=['% Y - %m - %d % H: % M: % S'],)

    class Meta:
        model = People
        fields = ('id', 'username', 'created', 'group', 'group_name')
