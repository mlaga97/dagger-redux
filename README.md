# Dagger web-client

## Development Setup
```
git clone ssh://[USERNAME]@131.95.12.234/home/sword/git/dagger-tools
cd dagger-tools
docker build -t dagger-redux .
docker run -v "$(pwd):/dagger" dagger-redux
```

## Deployment Setup
