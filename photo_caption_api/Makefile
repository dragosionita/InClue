app-run:
	uvicorn --host 0.0.0.0 --port 8080 main:app --reload

deploy-local:
	docker stop v3-invf-container || true && docker rm v3-invf-container || true
	docker build . -t v3-invf
	docker run -p 8080:8080 --name v3-invf-container v3-invf
