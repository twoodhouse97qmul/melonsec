"""sheringhamportal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from . import views
from django.urls import include,path

app_name = 'twwebdesign'



urlpatterns = [

    path('', views.melonhome, name='porthome'),        #home
    path('home/', views.melonhome, name='porthome'),      #home
    path('features/', views.features, name='porthome'),      #home
    path('news/', views.twhome, name='porthome'),
    path('tutorials/', views.tut_home, name='porthome'),
    path('overthewire/', views.otw, name='porthome'),
    path('rfidcomponents/', views.rfidcomps, name='porthome'),
    path('sshiframe/', views.sshterm, name='porthome'),
    path('b0frame/', views.b0frame, name='porthome'),
    path('b1frame/', views.b1frame, name='porthome'),
    path('b2frame/', views.b2frame, name='porthome'),
    path('b3frame/', views.b3frame, name='porthome'),
    path('b4frame/', views.b4frame, name='porthome'),
    path('b5frame/', views.b5frame, name='porthome'),
    path('b6frame/', views.b6frame, name='porthome'),
    path('b7frame/', views.b7frame, name='porthome'),
    path('b8frame/', views.b8frame, name='porthome'),
    path('b9frame/', views.b9frame, name='porthome'),
    path('mframe/', views.manterm, name='porthome'),
    path('screencreep/', views.creep, name='porthome'),
    path('melonmove/', views.melon_move, name='porthome'),
    path('landscape/', views.landscape, name='porthome'),




    path('tutorials/ublog', views.ublog_home, name='porthome'),
    path('floating/', views.floating_melon, name='porthome'),
    path('unavailable/', views.unavailable, name='porthome'),
    path('unavailable/<slug:backurl>/', views.unavailable_back, name='porthome'),
    path('ublog_vuln_1_link', views.blogger_su, name='blog-su'),
    path('mba/<slug:name>/<slug:passw>',views.makeBaseAccount,name = "mba"),


    #WILL BE UBLOG

    path('addsocial', views.add_socials, name='index'),
    path('addSocial/addFacebook/<slug:mainaccount>/', views.add_twitter, name='index'),
    path('addSocial/addFacebook/<slug:mainaccount>/<slug:mainaccount2>/', views.add_twitter, name='index'),
    path('changebio', views.change_biography, name='post_new'),
    path('/changebio', views.change_biography, name='post_new'),
    path('changebiown', views.change_biography_wn, name='post_new'),
    path('/changebiown', views.change_biography_wn, name='post_new'),
    path('news/', views.news, name='news'),
    path('about', views.twabout, name='porthome'),
    path('about/', views.twabout, name='porthome'),
    path('/about', views.twabout, name='porthome'),
    path(r'^$', views.twabout, name='porthome'),
    path('twwdabout', views.twabout, name='porthome'),
    path('contact', views.twcontact, name='porthome'),

    path('pollute/<slug:mainaccount>/', views.pollute, name='index'),    #
    path('pollute/<slug:mainaccount>/<slug:mainaccount2>/', views.pollute2, name='index'),


]
