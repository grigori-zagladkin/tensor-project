from typing import Optional, Mapping, Any

from pydantic import BaseSettings, PostgresDsn, validator

#select * from test
class Backend(BaseSettings):
    DB_USER: str = 'tensorcamp'
    DB_PASSWORD: str = '3rDBuvm01SurzK6t2sbLetLEI2pWbuNT'
    DB_HOST: str = 'dpg-cif89b18g3n3ipqgrd10-a.oregon-postgres.render.com'
    DB_DATABASE: str = 'tensorcamp'

    DB_URL: PostgresDsn = None

    @validator("DB_URL", pre=True)
    def assemble_postgres_url(cls, v: Optional[str], values: Mapping[str, Any]) -> str:
        if v is not None and isinstance(v, str):
            return v
        return str(
            PostgresDsn.build(
                scheme="postgresql",
                user=values['DB_USER'],
                password=values['DB_PASSWORD'],
                host=values['DB_HOST'],
                port="5432",
                path=f'/{values["DB_DATABASE"]}'
            )
        )


settings = Backend()

