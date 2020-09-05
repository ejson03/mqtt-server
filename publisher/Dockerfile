FROM toke/mosquitto

WORKDIR /app
RUN apt-get update && apt-get -y install python3-pip 

COPY . /app
RUN pip3 install -r  /app/requirements.txt
CMD python3 -u publisher.py