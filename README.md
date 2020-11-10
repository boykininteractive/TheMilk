# Boykin.Website

[Boykin.Website](https://Boykin.Website).
[Boykin.Website - Dev](https://Boykin.Website.boykin.dev).

## Client Setup

- Register domain w/ Name Cheap
- Update DNS to DNS Made Easy (Prod and \*.Boykin.Dev)
- Boykin.Dev, Add Cname pointing to NGINX
- Choose DO_NUXTJS_MIAB template (do.proxy.nuxtjs)
- Decide Client Port Number (2 if prod / dev)

## Update node.json (NGINX - Boykin.Dev)

- Add a Prod and Dev instance of the app (2 entries)
- Name should match the name in the build.sh file

## Boykin.Dev (192.34.58.50)

- Add project folder to /var/www
- change ownership to 'boykintj'
- SSH into server and update PM2
- CD /etc/nginx
- pm2 restart node.json
- pm2 save
- create a new NGINX virtual host
- copy in default config (below)
- Get a new SSL
- (Dev Only) Update location to point to node server

```
location / {

		proxy_pass http://localhost:3010;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}
```

```
sudo certbot --nginx -d example.com -d www.example.com
```

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/DOMAINNAME;
        index index.html index.htm index.nginx-debian.html;

        server_name DOMAINNAME www.DOMAINNAME;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

## GitLab (198.211.113.26)

- Settings > CI/CD / Variables
- Add FTP_PASSWORD
- Add FTP_USERNAME
- Add IP_ADDRESS

- Settings > Repository > Protected Branches
- Protect 'develop' branch

## do.proxy.nuxtjs (206.189.188.16)

- create a new NGINX virtual host (Prod Only)
- copy in default config (below)
- SSH into machine and get a new SSL

```
sudo certbot --nginx -d example.com -d www.example.com
```

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/DOMAINNAME;
        index index.html index.htm index.nginx-debian.html;

        server_name DOMAINNAME www.DOMAINNAME;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
