# Boykin.Website

[Boykin.Website](https://Boykin.Website).

> My stylish Nuxt.js project

## Client Setup

- Register domain w/ Name Cheap
- Update DNS to DNS Made Easy
- Choose DO_NUXTJS_MIAB template (do.proxy.nuxtjs)

## Boykin.Dev (192.34.58.50)

- Add project folder to /var/www
- change ownership to 'boykintj'

## GitLab (198.211.113.26)

- Settings > CI/CD / Variables
- Add FTP_PASSWORD
- Add FTP_USERNAME
- Add IP_ADDRESS

- Settings > Repository > Protected Branches
- Protect 'develop' branch

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
