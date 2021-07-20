from django.db import models


class Basa_dannuh(models.Model):
    title = models.CharField('Название', max_length=50)
    photo = models.ImageField('Фотографии')
    date = models.DateTimeField('Дата публикации')

    def __str__(self):
        return self.title


    class Meta:
        verbose_name = 'Фотография'
        verbose_name_plural = 'Фотографии'