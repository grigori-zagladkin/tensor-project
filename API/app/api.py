from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.servecise.database import DB
from app.routes.voting import voting_router
from app.routes.themes import themes_router
from app.routes.image import image_router

app = FastAPI(title='Название проекта')
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"],
                   allow_headers=["*"])


@app.on_event('startup')
async def fastapi_startup():
    await DB.connect_db()


@app.on_event('shutdown')
async def fastapi_shutdown():
    await DB.disconnect_db()


app.include_router(voting_router)
app.include_router(themes_router)
app.include_router(image_router)
