from rest_framework import authentication
from payments.models import Donation, Payment
from .serializers import DonationSerializer, PaymentSerializer
from rest_framework import viewsets


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Payment.objects.all()


class DonationViewSet(viewsets.ModelViewSet):
    serializer_class = DonationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Donation.objects.all()
