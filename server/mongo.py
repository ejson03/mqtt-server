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
    collection.insert_one(data)

def filter_records(start, end):
    fstart = datetime.datetime.strptime(start, '%Y-%m-%dT%H:%M')
    fend = datetime.datetime.strptime(end, '%Y-%m-%dT%H:%M')
    return list(collection.find({ "date": {'$gte':fstart,'$lt': fend}}))
  

   

