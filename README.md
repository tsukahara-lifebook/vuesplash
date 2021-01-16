# vuesplash
写真共有アプリ（https://www.hypertextcandy.com/vue-laravel-tutorial-setting-up-spa-project/）

```
docker-compose up -d
```

```
docker-compose exec vuesplash_web bash

./vendor/bin/phpunit --testdox
```

```
php artisan serve --host 0.0.0.0 --port 8081
```

```
docker-compose exec vuesplash_web php artisan serve --host 0.0.0.0 --port 8081
```

```
docker-compose exec vuesplash_web npm install
```

```
docker-compose exec vuesplash_web npm run watch
```

```
docker stop $(docker ps -q)
```

