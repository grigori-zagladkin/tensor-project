from app.servecise.database import DB
#пофиксить дату
async def create_result_to_bd(theme_id: int,stats: list):
    sql = """
        UPDATE themes  SET res = $2
        WHERE theme_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.fetchrow(sql,)
        return result