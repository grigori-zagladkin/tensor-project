from fastapi import APIRouter
from app.queries.topic import create_themes_to_bd

themes_router = APIRouter(tags =['Темы'])

# id int, name str , content str, result [3]

@themes_router.post('/create_themess')
async def create_themes(title : str, descr:str, vote_id: int):
    await create_themes_to_bd(title, descr, vote_id)
    return True