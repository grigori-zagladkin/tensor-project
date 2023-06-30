from app.servecise.database import DB
from datetime import date

async def create_voting_to_bd(title: str, date_voting: date ):
    sql = '''
        INSERT INTO votings(title, date_voting) 
        VALUES ($1, $2);
    '''
    async with DB.pool.acquire() as conn:
        await conn.execute(sql, title,date_voting)
