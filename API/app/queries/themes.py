from app.servecise.database import DB


async def create_themes_to_bd(title: str, descr: str, vote_id: int):
    sql = '''
    INSERT INTO themes (title, description, vote_id) 
    VALUES ($1, $2, $3);
    '''
    async with DB.pool.acquire() as conn:
        await conn.execute(sql, title, descr, vote_id)


async def get_themes_from_bd(theme_id: int):
    sql = """
        SELECT * FROM themes
        WHERE theme_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql, theme_id)
        return result


async def get_all_themes_from_bd():
    sql = """
        SELECT * FROM themes
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql)
        return result
