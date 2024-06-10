from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MaterialViewSet, SessionViewSet, SubjectViewSet

router = DefaultRouter()
router.register("material", MaterialViewSet)
router.register("session", SessionViewSet)
router.register("subject", SubjectViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
