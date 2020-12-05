from rest_framework import serializers
from .models import Room

class RoomSerilizer (serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code','host','guest_can_pause','votes_to_skip','created_at')
        