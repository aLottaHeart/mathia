# Mathia

```shell
$ composer create-project symfony/website-skeleton mathia
```
# Configuration

## Windows (XAMPP Apache)

In `xampp\apache\conf\extra\httpd-vhost.conf` add:
```
<VirtualHost *:80>
	ServerName mathia
    DocumentRoot C:/xampp/htdocs/www/mathia/public
	DirectoryIndex /index.php
	<Directory C:/xampp/htdocs/www/mathia/public>
		AllowOverride None
		Order Allow,Deny
		Allow from All
		FallbackResource /index.php
	</Directory>
</VirtualHost>
```

In `System32\drivers\etc\hosts` add:
```
127.0.0.1	mathia
```

Create `.env.local` and edit `APP_SECRET` as well as `DATABASE_URL`.

Install bootstrap:
```shell
$ npm install bootstrap --save-dev
$ npm install jquery @popperjs/core --save-dev
$ npm install sass-loader@^10.0.0 sass --save-dev
 ```
## Linux (Nginx)
(wip)
# Usage

## dev
```shell
$ npm run watch
```
## prod
```shell
$ npm run build
```