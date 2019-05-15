from .views import PeopleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'people', PeopleViewSet, basename='people')
urlpatterns = router.urls
