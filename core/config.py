import pathlib
from pydantic_settings import BaseSettings

ROOT = pathlib.Path(__file__).parent.parent.parent


class Settings(BaseSettings):
    API_HOST: str = "localhost"
    API_PORT: int = 8888
    # DB_URL: str
    # DB_PASSWORD: str
    # DB_HOSTNAME: str
    # DB_PORT: int
    # DB_NAME: str
    # SECRET_KEY: str

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


settings = Settings()
