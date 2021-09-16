app-run:
	uvicorn --host 0.0.0.0 --port 8080 main:app --reload

deploy-local:
	docker stop v1-inclue || true && docker rm v1-inclue  || true
	docker build . -t v3-ic
	docker run -p 8080:8080 --name v1-inclue  v3-ic

deploy-prd:
	gcloud config set project inclue
	
	gcloud builds submit --tag gcr.io/inclue/v1-photo-caption-api
	gcloud run deploy inclue \
	  --image gcr.io/inclue/v1-photo-caption-api:latest \
	  --platform managed \
	  --memory 4Gi \
	  --timeout 600s
