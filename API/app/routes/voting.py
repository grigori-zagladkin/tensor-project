from fastapi import APIRouter
from app.queries.voting import create_voting_to_bd
from datetime import date

voting_router = APIRouter(tags=['Голосование'])


@voting_router.post('/create_voting')
async def create_voting(title: str,date_voting: date):
    await create_voting_to_bd(title,date_voting)
    return True #поменять на тру

#поступает картинка, смотрим цвета, анлизируем, возвращаем обратно
#разбить бэйс 64(удалить лишнее),с нампай переганяю в массив из массива с СВ делаю картинку , получаю обратно