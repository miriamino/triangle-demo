## How to run locally
* clone repo
```
git clone git@github.com:miriamino/triangle-demo.git
```
* run [http-server](https://www.npmjs.com/package/http-server)
* open in browser (usually runs on port 8080)
* enjoy!


## With Docker 

* docker build -t triangles .
* docker run -d --name triangles -p 8080:8080 triangles
