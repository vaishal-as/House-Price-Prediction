FROM python:3.9.12-slim
RUN pip install fastapi[all] uvicorn joblib python-multipart
#EXPOSE 8000
#ENV PORT 8000
#ENV HOST "0.0.0.0"
COPY ./House-Price-Prediction /app
WORKDIR /app
#CMD ["uvicorn","main:app"]
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
#docker build -t myimage .
#docker run -d --name mycontainer -p 80:80 myimage
