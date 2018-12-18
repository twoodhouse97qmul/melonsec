from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.template import loader
from django.views.generic import View
from django.http import JsonResponse
from django.views.generic.edit import CreateView
from django.views.generic.edit import UpdateView
from django.views import generic
from django.shortcuts import get_object_or_404
from django.urls import reverse
from .models import Message
from django.shortcuts import redirect
from django.shortcuts import render
from django.template.response import TemplateResponse
from django.core import serializers
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import Http404
from django.contrib.auth.models import User
from .ublogverify import UblogVerifier




def pollute(request,mainaccount):

    print('value: '+mainaccount)
    return HttpResponse("Hello, world. You're at the polls index.")

def unavailable(request):

    context = {

    }
    return render(request, 'content-unavailable.html', context)


def creep(request):

    context = {

    }
    return render(request, 'creepy-screen.html', context)


def landscape(request):

    context = {

    }
    return render(request, 'landscape.html', context)

def unavailable_back(request,backurl):
    context = {
            'back_url': backurl
    }
    return render(request, 'content-unavailable.html', context)


def pollute2(request,mainaccount,mainaccount2):

    print('value: '+mainaccount)
    print('value two: '+mainaccount2)
    return HttpResponse("Hello, world. You're at the polls index.")

def blogger_su(request):
    context = {

    }
    return render(request, 'sign-up1.html', context)

def tut_home(request):
    context = {

    }
    return render(request, 'tutorials-home.html', context)

def floating_melon(request):
    context = {

    }
    return render(request, 'floating-melon.html', context)


def ublog_home(request):
    print('abcc')
    context = {

    }
    return render(request, 'ublog-overview.html', context)

def melonhome(request):
    context = {

    }
    return render(request, 'loadingscreen.html', context)

def sshterm(request):
    context = {

    }
    return render(request, 'sshterm.html', context)

def b0frame(request):
    context = {

    }
    return render(request, 'bandit0terminal.html', context)

def b1frame(request):
    context = {

    }
    return render(request, 'bandit1terminal.html', context)

def b2frame(request):
    context = {

    }
    return render(request, 'bandit2terminal.html', context)

def b3frame(request):

    context = {

    }
    return render(request, 'bandit3terminal.html', context)

def b4frame(request):

    context = {

    }
    return render(request, 'bandit4terminal.html', context)

def b5frame(request):

    context = {

    }
    return render(request, 'bandit5terminal.html', context)

def b6frame(request):

    context = {

    }
    return render(request, 'bandit6terminal.html', context)
def b7frame(request):

    context = {

    }
    return render(request, 'bandit7terminal.html', context)

def b8frame(request):

    context = {

    }
    return render(request, 'bandit8terminal.html', context)
def b9frame(request):

    context = {

    }
    return render(request, 'bandit9.html', context)

def otw(request):
    context = {

    }
    return render(request, 'overthewire.html', context)


def twhome(request):
    context = {

    }
    return render(request, 'opener/melonopener.html', context)

def features(request):
    context = {

    }
    return render(request, 'melonFeatures.html', context)

def rfidcomps(request):
    context = {

    }
    return render(request, 'rfidcomp.html', context)


def news(request):
    context = {

    }
    return render(request, 'newshome.html', context)

def add_socials(request):
    context = {

    }
    return render(request, 'ublog/blogger-link-sm.html', context)


@csrf_exempt
def change_biography(request):
    if request.method == 'POST':
        namm = 'default'
        biography = request.POST['newbio']
        print(namm)
        print(biography)

        if( '<button' in biography ):
            print('in malicous')
            if('ajax' in biography):
                print("AJAX FOUND")
                biography = 'UBV__ajax'
            elif('malic' in biography):
                print("MALICOUS FOUND")
                biography = 'UBV__malic'
            else:
                print("MALICOUS CODE SANATISED")
                biography = "MALICOUS CODE SANATISED"


        try:
            Message.objects.filter(
            name = namm,
            ).delete()
            print('hopefully deleted')
        except:
            print('exception, there never was a bio here.')
            pass


        Message.objects.create(
        name = namm,
        bio = biography
        )



        return HttpResponse(status=200)

@csrf_exempt
def change_biography_wn(request):

    print('reached WN')
    if request.method == 'POST':
        namm = request.POST['nam']
        biography = request.POST['newbio']
        print(namm)
        print(biography)

        if( '<button' in biography ):
            print('in malicous')
            if('ajax' in biography):
                print("AJAX FOUND")
                biography = 'UBV__ajax'
            elif('malic' in biography):
                print("MALICOUS FOUND")
                biography = 'UBV__malic'
            else:
                print("MALICOUS CODE SANATISED")
                biography = "MALICOUS CODE SANATISED"


        try:
            Message.objects.filter(
            name = namm,
            ).delete()
            print('hopefully deleted')
        except:
            print('exception, there never was a bio here.')
            pass


        Message.objects.create(
        name = namm,
        bio = biography
        )



        return HttpResponse(status=200)

def loadBloggerProfile(request):
    blogger_ID = 'default'

    try:
        bio = Message.objects.get(name=blogger_ID).bio
    except Message.DoesNotExist:
        print("no bio found")
        bio = 'your biography will be shown here'


    context = {
        'biography_text':bio
    }
    return render(request, 'templates/blogger-bio-area.html', context)


def twPast(request):
    context = {

    }
    return render(request, 'pastWork.html', context)

def twabout(request):
    context = {

    }
    return render(request, 'twwdabout.html', context)

def twcontact(request):
    context = {

    }
    return render(request, 'contact.html', context)


def twwdabout(request):

    context = {

    }

    return render(request, 'twwdabout.html', context)

def makeBaseAccount(request,name,passw):
    email = "neoemail"
    user = User.objects.create_user(name, 'noemail', passw)
    request.session['verified_profile'] = False
    return HttpResponse(status=200)


def add_facebook(request,mainaccount):



    verifier = UblogVerifier();
    return_error = "";
    return_message = "";
    error_type = "";
    error_type2 = "";
    e_target= "";
    error_1 = False;

    owned = verifier.verifyUserOwnership(mainaccount);
    limit = verifier.verify1000(mainaccount);

    if(limit == False):
        return_error = "Sorry, you don't have enough followers on that account:";
        return_message = "Come back when you have more friends.";
        error_type = "Friendless Error";
        e_target = "(Twitter ID: "+mainaccount+")";
        error_1 = True;

    return_error_2 = "";
    return_message_2 = "";
    return_target_2 = "";

    if(owned == False):
        return_error_2 = "You don't have authorisation for that account ";
        return_message_2 = "please go back and verifiy a social media account.";
        return_target_2 = "(Twitter ID: "+mainaccount+")";
        error_type2 = 'Verification Error';

    context = {
    'error_1':error_1,
    'error_type':error_type,
    'error_type2':error_type2,
    'error_info':return_error,
    'error_message':return_message,
    'error_target':e_target,
    'error_info_2':return_error_2,
    'error_message_2':return_message_2,
    'error_target_2':return_target_2,
    'return_url':'/home'

    }

    return render(request, 'sign-up-errors.html', context)

def argsToArray(kwargs):
    arguments = [];

    for k,v in kwargs.items():
        arguments.append(v);

    return arguments;


def add_twitter(request,**kwargs):

    arguments = argsToArray(kwargs);

    verifier = UblogVerifier();
    owned = verifier.verifyUserOwnership(arguments[0]); #TAKES FIRST
    limit = verifier.verify1000(arguments[-1]); #TAKES LAST



    return_error = "";
    return_message = "";
    error_type = "";
    error_type2 = "";
    e_target= "";
    error_1 = False;
    error_2 = False;

    if(owned &  limit):
        return render(request, 'congratulations.html', {})


    if(limit == False):
        return_error = "Sorry, you don't have enough followers on that account:";
        return_message = "Come back when you have more friends.";
        error_type = "Friendless Error";
        e_target = "(Twitter ID: "+arguments[-1]+")";
        error_1 = True;

    return_error_2 = "";
    return_message_2 = "";
    return_target_2 = "";

    if(owned == False):
        return_error_2 = "You don't have authorisation for that account ";
        return_message_2 = "please go back and verifiy a social media account.";
        return_target_2 = "(Twitter ID: "+arguments[0]+")";
        error_type2 = 'Verification Error';
        error_2 = True;

    context = {
    'error_1':error_1,
    'error_2':error_2,
    'error_type':error_type,
    'error_type2':error_type2,
    'error_info':return_error,
    'error_message':return_message,
    'error_target':e_target,
    'error_info_2':return_error_2,
    'error_message_2':return_message_2,
    'error_target_2':return_target_2,
    'return_url':'/home'

    }

    return render(request, 'sign-up-errors.html', context)



    context = {
    'error_message':return_text
    }

    print("ackkk")

    return render(request, 'sign-up-errors.html', context)


def add_facebook_d(request,mainaccount,mainaccount2):

    verifier = UblogVerifier();
    return_error = "";
    return_message = "";
    error_type = "";
    error_type2 = "";
    e_target= "";
    error_1 = False;

    owned = verifier.verifyUserOwnership(mainaccount);
    limit = verifier.verify1000(mainaccount2);

    if(owned &  limit):
        return render(request, 'congratulations.html', {})


    if(limit == False):
        return_error = "Sorry, you don't have enough followers on that account:";
        return_message = "Come back when you have more friends.";
        error_type = "Friendless Error";
        e_target = "(Twitter ID: "+mainaccount2+")";
        error_1 = True;

    return_error_2 = "";
    return_message_2 = "";
    return_target_2 = "";

    if(owned == False):
        return_error_2 = "You don't have authorisation for that account ";
        return_message_2 = "please go back and verifiy a social media account.";
        return_target_2 = "(Twitter ID: "+mainaccount+")";
        error_type2 = 'Verification Error';

    context = {
    'error_1':error_1,
    'error_type':error_type,
    'error_type2':error_type2,
    'error_info':return_error,
    'error_message':return_message,
    'error_target':e_target,
    'error_info_2':return_error_2,
    'error_message_2':return_message_2,
    'error_target_2':return_target_2,
    'return_url':'/home'

    }

    return render(request, 'sign-up-errors.html', context)



    context = {
    'error_message':return_text
    }

    print("ackkk")

    return render(request, 'sign-up-errors.html', context)
