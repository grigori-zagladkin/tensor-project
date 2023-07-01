from fastapi import APIRouter
from app.queries.voting import create_voting_to_bd
from app.queries.voting import get_voting_from_bd
from app.queries.voting import get_all_voting_from_bd
from fastapi import Body
from datetime import date

voting_router = APIRouter(tags=['Голосование'])


@voting_router.post('/create_voting')
async def create_voting(data=Body()):
    title = data['title']
    date_voting = date.today()
    return await create_voting_to_bd(title, date_voting)


@voting_router.get('/get_voting')
async def get_voting(voting_id: int):
    return await get_voting_from_bd(voting_id)

@voting_router.get('/get_all_voting')
async def get_all_voting():
    return await get_all_voting_from_bd()


#поступает картинка, смотрим цвета, анлизируем, возвращаем обратно
#разбить бэйс 64(удалить лишнее),с нампай переганяю в массив из массива с СВ делаю картинку , получаю обратно