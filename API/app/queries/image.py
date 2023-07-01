from app.servecise.database import DB


# пофиксить дату
async def create_result_to_bd(theme_id: int, stats: list):
    sum_status = sum(stats)
    if sum_status / 2 < stats[0]:
        status = 1
    else:
        status = 0
    sql = """
        UPDATE themes  SET res = $2,
        status = $3
        WHERE theme_id = $1
    """
    async with DB.pool.acquire() as conn:
        result = await conn.execute(sql, theme_id, stats, status)
        return result

    sql_1 ="""
    SELECT * FROM 
    """