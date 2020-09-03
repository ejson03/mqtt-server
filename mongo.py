import os
import datetime
from pymongo import MongoClient

mongoClient = MongoClient(os.environ.get("MONGO_URL"))
db = mongoClient.random
collection = db.data

def insert_one(number):
    data = {
        "date": datetime.datetime.utcnow(),
        "number": number
    }
    post = collection.insert_one(data)
    if post: 
        return True
    else: 
        return False

