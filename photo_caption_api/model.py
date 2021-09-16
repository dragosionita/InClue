from pydantic import BaseModel
from typing import List


class Request(BaseModel):
    images: List[str]


class ImageResponse(BaseModel):
    image: str
    description: str
    tags: List[str]


class Response(BaseModel):
    images: List[ImageResponse]
