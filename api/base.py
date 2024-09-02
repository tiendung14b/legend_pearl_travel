from fastapi import APIRouter
from .routes import project, translation, short

api_router = APIRouter()
api_router.include_router(project.router, prefix="/project", tags=["project"])
api_router.include_router(translation.router, prefix="/translation", tags=["translation"])
api_router.include_router(short.router, prefix="/short", tags=["short"])