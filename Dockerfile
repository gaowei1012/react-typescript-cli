# node版本
FROM node:8.16.0-jessie

# 安装nginx
RUN yum update && yum -g nginx

# 指定目录
WORKDIR /www

# 运行端口号
EXPOSE 3030

# 安装依赖，并部署
RUN npm install \
        && npm run build \
        && cp -r dist/* /var/www/html \
        && rm -rf /app

CMD [ "nginx", "-g", "daemon off" ] 
