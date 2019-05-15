from django.test import TestCase
from .models import Group


class GroupModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Group.objects.create(name='admin group')
        Group.objects.create(description='a description here')

    def test_name_content(self):
        group = Group.objects.get(id=1)
        expected_object_name = f'{group.name}'
        self.assertEquals(expected_object_name, 'admin group')

    def test_description_content(self):
        group = Group.objects.get(id=2)
        expected_object_name = f'{group.description}'
        self.assertEquals(expected_object_name, 'a description here')
