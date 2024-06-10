from django.conf import settings
from django.db import models


class Payment(models.Model):
    "Generated Model"
    payer = models.ForeignKey(
        "users.User",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="payment_payer",
    )
    session = models.ForeignKey(
        "tutoring.Session",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="payment_session",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    status = models.CharField(
        max_length=50,
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )
    currency = models.CharField(
        max_length=10,
        null=True,
        blank=True,
    )


class Donation(models.Model):
    "Generated Model"
    donor = models.ForeignKey(
        "users.User",
        null=False,
        blank=False,
        on_delete=models.CASCADE,
        related_name="donation_donor",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    session = models.ForeignKey(
        "tutoring.Session",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="donation_session",
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )


# Create your models here.
