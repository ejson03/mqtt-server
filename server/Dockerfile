FROM python:3.7-slim as base

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip3 install -r  /app/requirements.txt
ADD . /app
CMD python -u server.py

