from django.test import TestCase
from .models import People
from groups.models import Group


class PeopleModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        new_group = Group.objects.create(
            name='admin',
            description='a description here'
        )
        People.objects.create(username='admin', group=new_group)

    def test_username_content(self):
        people = People.objects.get(id=1)
        expected_object_name = f'{people.username}'
        self.assertEquals(expected_object_name, 'admin')

    def test_group_foreignKey(self):
        group = Group.objects.get(name='admin')
        expected_object_name = f'{group}'
        self.assertEquals(expected_object_name, 'admin')
