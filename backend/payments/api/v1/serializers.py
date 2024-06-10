from rest_framework import serializers
from payments.models import Donation, Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = "__all__"
