import io
import requests

from numpy import argmax
from keras.preprocessing.sequence import pad_sequences
from keras.applications.vgg16 import VGG16
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.applications.vgg16 import preprocess_input
from keras.models import Model

from model import Request, Response, ImageResponse
from PIL import Image


def extract_features(image, vgg):
	# load the photo
	image = Image.open(io.BytesIO(image))
	image = image.convert('RGB')
	image = image.resize((224, 224), Image.NEAREST)
	
	# convert the image pixels to a numpy array
	image = img_to_array(image)

	# reshape data for the model
	image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
	# prepare the image for the VGG model
	image = preprocess_input(image)
	# get features
	feature = vgg.predict(image, verbose=0)
	return feature


# map an integer to a word
def word_for_id(integer, tokenizer):
	for word, index in tokenizer.word_index.items():
		if index == integer:
			return word
	return None


# generate a description for an image
def generate_desc(model, tokenizer, photo, max_length):
	# seed the generation process
	in_text = 'startseq'
	# iterate over the whole length of the sequence
	for i in range(max_length):
		# integer encode input sequence
		sequence = tokenizer.texts_to_sequences([in_text])[0]
		# pad input
		sequence = pad_sequences([sequence], maxlen=max_length)
		# predict next word
		yhat = model.predict([photo,sequence], verbose=0)
		# convert probability to integer
		yhat = argmax(yhat)
		# map integer to word
		word = word_for_id(yhat, tokenizer)
		# stop if we cannot map the word
		if word is None:
			break
		# append as input for generating the next word
		in_text += ' ' + word
		# stop if we predict the end of the sequence
		if word == 'endseq':
			break
	return in_text


def get_response(model, tokenizer, max_length, input_req: Request) -> Response:
	# load the model
	vgg = VGG16()
	# re-structure the model
	vgg = Model(inputs=vgg.inputs, outputs=vgg.layers[-2].output)

	images = []
	for img_url in input_req.images:
		try:
			response = requests.get(img_url)
			if response.status_code != 200:
				continue
			# load and prepare the photograph
			photo = extract_features(response.content, vgg)
			# generate description
			description = generate_desc(model, tokenizer, photo, max_length)
			description = ' '.join(description.split(' ')[1:-1])
			images.append(ImageResponse(
				image=img_url,
				description=description,
				tags=description.split(' ')
			))
		except Exception:
			continue
	return Response(images=images)
