from django.db import models


class People(models.Model):
    username = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey('groups.Group', on_delete=models.CASCADE)

    def __str__(self):
        return self.username
