import base64

from fastapi import APIRouter, Body
import numpy as np
import cv2

#
image_router = APIRouter(tags=['Обработка'])
#поступает картинка, смотрим цвета, анлизируем, возвращаем обратно
#разбить бэйс 64(удалить лишнее),с нампай переганяю в массив из массива с СВ делаю картинку , получаю обратно
#поле строка, from buffer numpy результат отдаю
@image_router.post('/processing')
async def image_proccessing(data = Body()):
    image_64 = data["file"]
    image_64 = image_64[image_64.find(",")+1:]
    nparr = np.frombuffer(base64.b64decode(image_64), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return image_64
