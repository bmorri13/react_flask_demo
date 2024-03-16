FROM python:3.13.0a5-slim

WORKDIR /app
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENV FLASK_APP=api
ENV FLASK_ENV=development

## Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]
