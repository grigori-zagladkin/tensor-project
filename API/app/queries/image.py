from app.servecise.database import DB


# пофиксить дату
async def create_result_to_bd(theme_id: int, stats: list):
    sum_status = sum(stats)
    if sum_status / 2 < stats[0]:
        status = 1
    else:
        status = 0
    sql = """
        with upd_theme as (
        UPDATE themes  SET res = $2,
        status = $3
        WHERE theme_id = $1)
        ,vote AS (
                    SELECT vote_id FROM themes t WHERE theme_id = $1
                )
                ,   dt AS (
                    SELECT 
                        status,
                        CASE WHEN $3 = status
                        THEN count(*) + 1
                        ELSE count(*)
                        END
                    FROM 
                        themes
                    WHERE 
                        vote_id = (SELECT vote_id FROM vote)
                    GROUP BY 
                        status
                    ORDER BY count(*)
                    LIMIT 1
                )
                UPDATE 
                    votings v
                SET 
                    status = dt.status
                FROM 
                    dt
                WHERE v.voting_id = (SELECT vote_id FROM vote)
    """
    async with DB.pool.acquire() as conn:
        result = await conn.execute(sql, theme_id, stats, status)
        return result

    # sql_1 ="""
    #     WITH vote AS (
    #                 SELECT vote_id FROM themes t WHERE theme_id = $1
    #             )
    #             ,   dt AS (
    #                 SELECT
    #                     status,
    #                     count(*)
    #                 FROM
    #                     themes
    #                 WHERE
    #                     vote_id = (SELECT vote_id FROM vote)
    #                 GROUP BY
    #                     status
    #                 ORDER BY count(*)
    #                 LIMIT 1
    #             )
    #             UPDATE
    #                 votings v
    #             SET
    #                 status = dt.status
    #             FROM
    #                 dt
    #             WHERE v.voting_id = (SELECT vote_id FROM vote)
    # """
    # with DB.pool.acquire() as conn:
    #     result = await conn.execute(sql_1, theme_id)
    #     return result
