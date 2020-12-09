#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

# We have base custom user model so need to makemigrations out of box
python manage.py makemigrations core

python manage.py migrate
python manage.py collectstatic --noinput

exec "$@"