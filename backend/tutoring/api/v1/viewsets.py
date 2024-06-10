from rest_framework import authentication
from tutoring.models import Subject, Material, Session
from .serializers import MaterialSerializer, SessionSerializer, SubjectSerializer
from rest_framework import viewsets


class MaterialViewSet(viewsets.ModelViewSet):
    serializer_class = MaterialSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Material.objects.all()


class SessionViewSet(viewsets.ModelViewSet):
    serializer_class = SessionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Session.objects.all()


class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Subject.objects.all()
