from app.servecise.database import DB


async def create_themes_to_bd(title: str, descr: str, vote_id: int):
    sql = '''
    INSERT INTO themes (title, description, vote_id, res) 
    VALUES ($1, $2, $3, ARRAY[]::integer[])
    RETURNING title, description, vote_id, json_build_object('Yes', res[1], 'No', res[2], 'Unsure', res[3]) res
    '''
    async with DB.pool.acquire() as conn:
        return await conn.fetchrow(sql, title, descr, vote_id)


async def get_themes_from_bd(theme_id: int):
    sql = """
        select json_build_object('Yes', res[1], 'No', res[2], 'Unsure', res[3]) res, theme_id, title, vote_id, status, description from themes
        WHERE theme_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql, theme_id)
        return result


async def get_all_themes_from_bd(vote_id):
    sql = """
        select json_build_object('Yes', res[1], 'No', res[2], 'Unsure', res[3]) res, theme_id, title, vote_id, status, description from themes
        where vote_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetch(sql, vote_id)
        return result
