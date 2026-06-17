from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI DevOps Dashboard",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "status": "running",
        "project": "AI DevOps Dashboard"
    }

@app.get("/api/stats")
def stats():
    return {
        "pipelines": 12,
        "containers": 8,
        "deployments": 42,
        "status": "healthy"
    }