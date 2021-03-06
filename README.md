![titulo](/docs/titulo.jpg)

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

- Create a new project:
	
![vision01](/docs/vision01.JPG)

- Give a name to the project and press on "CREATE":

![vision02](/docs/vision02.JPG)

- Create a billing for the project. Just follow these [instructions](https://cloud.google.com/billing/docs/how-to/modify-project):

![vision03](/docs/vision03.JPG)

- At the APIs & Services dashboard, press on "ENABLE APIS AND SERVICES":

![vision04](/docs/vision04.JPG)

- Enable Cloud Vision API:

![vision05](/docs/vision05.JPG)

- Create service account credentials for this API:

![vision06](/docs/vision06.JPG)

- Choose not using App Engine neither Computer Engine:

![vision07](/docs/vision07.JPG)

- Give a name to the service account, select the project owner role and the JSON type file.

![vision08](/docs/vision08.JPG)

- Download the credentials file.

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

- If the Cloud Vision API detects text inside the image, it will be extracted and returned to the app:

![quasar03](/docs/quasar3.JPG)