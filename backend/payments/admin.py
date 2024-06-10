from django.contrib import admin
from .models import Donation, Payment

admin.site.register(Payment)
admin.site.register(Donation)

# Register your models here.
