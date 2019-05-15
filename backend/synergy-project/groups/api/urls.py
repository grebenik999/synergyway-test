from .views import GroupViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'group', GroupViewSet, basename='group')
urlpatterns = router.urls
