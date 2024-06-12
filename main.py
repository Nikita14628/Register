from typing import List
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI,Query
from shemas import Book

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/test')
def home():
    return {"key":"HELLO"}


@app.get('/{pk}')
def get_item(pk: int, q: str = None):
    return {"key":pk,"q":q}


@app.get('/user/{pk}/items/{item}/')
def get_user_item(pk: int,item: str):
    return {"user": pk,"item": item}


@app.post('/book')
def create_book(item: Book):
    return item


@app.get('/book')
def get_book(q: List[str] = Query(["test","test2"],description="Search book",deprecated=True)):
    return q

@app.get('/')
def test():
    return {1:"Каждый",2:"Охотник",3:"Желает","4":"Знать","5":"Где","6":"Сидит","7":"Фазан"}