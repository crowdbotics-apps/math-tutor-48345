from django.conf import settings
from django.db import models


class Payment(models.Model):
    "Generated Model"
    payer = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="payment_payer",
    )
    session = models.ForeignKey(
        "tutoring.Session",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
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


class Donation(models.Model):
    "Generated Model"
    donor = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="donation_donor",
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )
    session = models.ForeignKey(
        "tutoring.Session",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="donation_session",
    )
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )


# Create your models here.
