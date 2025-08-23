from fastapi import FastAPI
from .database import Base, engine
from .models import user  # import your models so they get registered
from .routers import auth

app = FastAPI()

# Create DB tables
Base.metadata.create_all(bind=engine)

# Routers
app.include_router(auth.router)
