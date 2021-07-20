from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('service', views.service, name='service'),
    path('about_us', views.about, name='about'),
]