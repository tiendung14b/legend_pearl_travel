from fastapi import APIRouter
from fastapi.responses import JSONResponse
from typing import List

router = APIRouter()

@router.get("/")
async def read_root():
    return JSONResponse(content={"Create": "New Short!"})
