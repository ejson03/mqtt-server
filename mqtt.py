import os
import subprocess
import time
from dotenv import load_dotenv
from concurrent.futures import ProcessPoolExecutor
import sys

root = os.path.abspath(os.getcwd())

def execute(cmd):
    process = subprocess.Popen(cmd, shell=True)
 
if __name__ == "__main__":
    load_dotenv()
    execute(["python", "subscriber.py"])
    execute(["python", "publisher.py"])
    