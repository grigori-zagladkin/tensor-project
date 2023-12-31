from fastapi import APIRouter, Body
from app.queries.themes import create_themes_to_bd
from app.queries.themes import get_themes_from_bd
from app.queries.themes import get_all_themes_from_bd

themes_router = APIRouter(tags=['Темы'])


# id int, name str , content str, result [3]

@themes_router.post('/create_themes')
async def create_themes(data=Body()):
    title = data["title"]
    descr = data["description"]
    vote_id = data["voteId"]
    return await create_themes_to_bd(title, descr, vote_id)


@themes_router.get('/get_themes')
async def get_themes(theme_id: int):
    return await get_themes_from_bd(theme_id)


@themes_router.get('/get_all_themes')
async def get_all_themes(vote_id : int):
    return await get_all_themes_from_bd(vote_id)
