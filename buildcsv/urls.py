"""buildcsv URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from buildcsv import settings
from draw import views as draw_views  # new
urlpatterns = [
  url(r'^admin/', admin.site.urls),
	url(r'^$',draw_views.index),
	url(r'^add/',draw_views.uploadify_script),
	url(r'^pie/',draw_views.pie),
	url(r'^rectangle/',draw_views.rectangle),
	url(r'^scatterdiagram/',draw_views.scatterdiagram),
	url(r'^linechart/',draw_views.linechart),
	url(r'^histogram/',draw_views.histogram),
	url(r'^map/',draw_views.map),
]
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT )
