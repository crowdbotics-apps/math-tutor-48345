from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DonationViewSet, PaymentViewSet

router = DefaultRouter()
router.register("payment", PaymentViewSet)
router.register("donation", DonationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
