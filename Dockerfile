FROM httpd:2.4
ADD ./dist  /usr/local/apache2/htdocs/
EXPOSE 80
#docker build -t my-apache2 .
#docker run -d --name my-running-app -p 80:80 my-apache2