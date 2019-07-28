# Quasar-NodeJS-Google-Vision

Extract text from images by using Google Vision, Quasar v1 and NodeJS API.

## Technologies:

- Quasar v1
- Vuex
- Axios
- NodeJS Express
- Google Vision API

## To run this project

### Google Cloud Platform

- Create a project and enable billing:
	
![vision01](/docs/vision01.JPG)

![vision02](/docs/vision02.JPG)

![vision03](/docs/vision03.JPG)

- Activate APIs and services and enable Google Vision API:

![vision04](/docs/vision04.JPG)

![vision05](/docs/vision05.JPG)

- Create credentials for this API without App Engine and Computer Engine. Choose the owner role and JSON type file. Download the credentials.

![vision06](/docs/vision06.JPG)

![vision07](/docs/vision07.JPG)

![vision08](/docs/vision08.JPG)

![vision09](/docs/vision09.JPG)

### NodeJS API

- Rename the credentials file to "credentials.json" and put it inside the "node" folder:

![node01](/docs/node01.JPG)

- Open the terminal and download the packages:
```batch
	npm install
```

- Run the server:
```batch
	node .
```

### Quasar App

- Open the terminal inside the "quasar" folder and download the packages:
```batch
	npm install
```
	
- Run the app:
```batch
	quasar dev
```
	
- At the main screen, press the "Choose File" button:

![quasar01](/docs/quasar1.JPG)
	
- Choose a image and press the "Upload" button:

![quasar02](/docs/quasar2.JPG)

- If the Google Vision API detects text inside the image, it will be extracted and returned to the app:

![quasar03](/docs/quasar3.JPG)