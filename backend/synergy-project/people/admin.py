from django.contrib import admin

from .models import People

class PeopleAdmin(admin.ModelAdmin):
    list_display = ('username', 'group',)

admin.site.register(People, PeopleAdmin)
