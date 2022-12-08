from django.shortcuts import render
from django.http import HttpResponse
from .models import Task
from .serializers import TaskSerializers
from rest_framework import generics

# Create your views here.
class TaskList(generics.ListAPIView):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()

class TaskCreate(generics.CreateAPIView):
    serializer_class = TaskSerializers

class TaskDelete(generics.RetrieveDestroyAPIView):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()

class TaskDo(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return HttpResponse({"message": "mobile number updated successfully"})
        else:
            return HttpResponse({"message": "failed", "details": serializer.errors})
