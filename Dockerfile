FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/
COPY nginx.crt /etc/ssl/
COPY nginx.key /etc/ssl/
ADD storage /usr/share/nginx/first/html
ADD 50x.html /usr/share/nginx/first/html/
COPY storage/index.html  /usr/share/nginx/first/html/
RUN rm -rf /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/