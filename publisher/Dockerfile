FROM toke/mosquitto

WORKDIR /app
COPY . /app


# RUN apt-get update && apt-get -y install python3-pip 

# RUN pip3 install -r  /app/requirements.txt
RUN chmod +x /app/run.sh
CMD ["./run.sh"]