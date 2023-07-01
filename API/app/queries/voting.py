from app.servecise.database import DB
from datetime import date

async def create_voting_to_bd(title: str, date_voting: date ):
    sql = '''
        INSERT INTO votings(title, date_voting) 
        VALUES ($1, $2);
    '''
    async with DB.pool.acquire() as conn:
        await conn.execute(sql, title,date_voting)

async def get_voting_from_bd(voting_id: int):
    sql = """
        SELECT * FROM votings
        WHERE voting_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql, voting_id)
        return result

async def get_all_voting_from_bd():
    sql = """
        SELECT * FROM votings
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql)
        return result
