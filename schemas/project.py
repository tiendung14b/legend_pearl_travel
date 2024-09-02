from pydantic import BaseModel
from typing import List, Optional

class ProjectBase(BaseModel):
    name: str
    description: Optional[str]