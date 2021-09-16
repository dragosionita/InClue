from pickle import load
from keras.models import load_model

from model import Request, Response
from fastapi import FastAPI, HTTPException

from calculation import get_response

app = FastAPI(openapi_url="/openapi.json")

# pre-define the max sequence length (from training)
MAX_LENGTH = 12


@app.post("/photo_caption", response_model=Response)
def predict(input_req: Request) -> Response:
	# load the tokenizer
	tokenizer = load(open('model/tokenizer.pkl', 'rb'))
	# load the model
	model = load_model('model/model.h5')
	return get_response(model, tokenizer, MAX_LENGTH, input_req)
