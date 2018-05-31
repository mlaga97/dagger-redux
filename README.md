# Dagger web-client

## Development Setup
NOTE: Just use dagger-tools for now
```
git clone ssh://[USERNAME]@131.95.12.234/home/sword/git/dagger-tools
cd dagger-tools
docker build -t dagger-redux .
docker run -it -v "$(pwd):/dagger" dagger-redux develop
```

## Deployment Setup
