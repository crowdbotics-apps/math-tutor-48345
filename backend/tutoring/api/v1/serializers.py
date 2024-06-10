from rest_framework import serializers
from tutoring.models import Material, Session, Subject


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = "__all__"


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = "__all__"


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = "__all__"
