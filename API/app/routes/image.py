import base64

from fastapi import APIRouter, Body
import numpy as np
import cv2
from vid_test import get_trashes_and_hvc_for_rgb
from app.queries.image import create_result_to_bd

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
    stats = get_trashes_and_hvc_for_rgb(img)
    yes = stats["Green"]
    no = stats["Red"]
    fifty = stats["Yellow"]
    if data["end_vote"]:
        await create_result_to_bd(data["theme_id"], [yes,no,fifty])
    return image_64
