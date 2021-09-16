FROM python:3.8.5-slim as base
RUN pip install --upgrade pip


COPY requirements.txt /tmp
WORKDIR /tmp
RUN pip install -r requirements.txt
RUN rm requirements.txt


FROM base

COPY . /app

WORKDIR /app/

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
