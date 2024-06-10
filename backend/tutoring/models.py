from django.conf import settings
from django.db import models


class Material(models.Model):
    "Generated Model"
    subject = models.ForeignKey(
        "tutoring.Subject",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="material_subject",
    )
    title = models.CharField(
        max_length=255,
    )
    content = models.TextField()
    created_at = models.DateTimeField(
        null=False,
        blank=False,
    )


class Session(models.Model):
    "Generated Model"
    teacher = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="session_teacher",
    )
    student = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="session_student",
    )
    subject = models.ForeignKey(
        "tutoring.Subject",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="session_subject",
    )
    scheduled_time = models.DateTimeField(
        null=False,
        blank=False,
    )
    duration = models.IntegerField(
        null=False,
        blank=False,
    )


class Subject(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=100,
    )


# Create your models here.
