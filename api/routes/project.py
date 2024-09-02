from fastapi import APIRouter
from fastapi.responses import JSONResponse
from typing import List
# from schemas.project import ProjectBase

router = APIRouter()

@router.get("/")
async def read_root():
    return JSONResponse(content={"Hello": "New Project!"})