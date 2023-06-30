from app.servecise.database import DB


async def create_themes_to_bd(title : str, descr:str, vote_id: int):
    sql= '''
    INSERT INTO themes (title, description, vote_id) 
    VALUES ($1, $2, $3);
    '''
    async with DB.pool.acquire() as conn:
        await conn.execute(sql, title, descr, vote_id)
