Standalone UI Microservice in a project capable of interacting with a set of mapped / decoupled backend services.

If you'd like to debug this locally with the grizzly-web-service example, do the following...

1 = Run the grizzly-web-service via Main.main() on port 5000 (default port for aws elastic beanstalk Java service)

2 = Get / install Apache Web Server (if you haven't already done so)

3 = In httpd.conf, configure your document root to point to static-web's project folder.
e.g. On Windows...
DocumentRoot "C:\projects\static-web"

4 = Uncomment the lines to enable proxy_module and proxy_http_module as:
e.g. On Windows...
LoadModule proxy_module ..\modules\mod_proxy.so
LoadModule proxy_http_module ..\modules\mod_proxy_http.so

5 = Add the following lines to the end of httpd.conf:
ProxyPreserveHost On
ProxyPass /gws http://localhost:5000/gws
ProxyPassReverse /gws http://localhost:5000/gws

Be sure to restart your Apache web server after making changes 3, 4 and 5.
