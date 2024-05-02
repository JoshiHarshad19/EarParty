from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

def hello(request):
    return HttpResponse("Hello. Welcome to API")

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer
    def post(self, request, format= None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guestCanPause = serializer.data.get('guestCanPause')
            votesForSkip = serializer.data.get('votesForSkip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guestCanPause = guestCanPause
                room.votesForSkip = votesForSkip
                room.save(update_fields=['guestCanPause','votesForSkip'])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guestCanPause=guestCanPause, votesForSkip=votesForSkip)
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)
            
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)