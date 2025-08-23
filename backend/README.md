# 🎓 AI-Powered Job Portal (Final Year Project)

This is a **job portal application** built with **FastAPI** for the backend.  
The system allows job seekers and employers to register, login, and manage job-related data.  
It will later include **resume uploads, AI-powered job recommendations, and reporting features**.  

---

## 🚀 Features (Week 1)
- User registration (email & password)
- User login with JWT authentication
- Hybrid authentication planned (Email/Password + Google OAuth)
- SQLite database for development (easy to switch to PostgreSQL in production)
- Interactive API docs with Swagger UI

---

## 🛠️ Tech Stack
- **Backend:** FastAPI (Python)
- **Database:** SQLite (development) / PostgreSQL (production-ready)
- **ORM:** SQLAlchemy
- **Authentication:** JWT, Bcrypt for password hashing, Google OAuth (upcoming)
- **Frontend:** React (to be added in later weeks)
- **AI Matching:** NLP + embeddings (future milestone)

---

## 📂 Project Structure
```

backend/
│── app/
│   ├── main.py              # FastAPI entrypoint
│   ├── database.py          # DB connection (SQLite for dev)
│   ├── models/              # SQLAlchemy models
│   │    └── user.py
│   ├── routers/             # API routes
│   │    └── auth.py
│   ├── schemas/             # Pydantic schemas
│   │    └── user.py
│   └── utils/               # Helper functions
│        └── auth\_utils.py
│── jobs\_portal.db           # SQLite database (auto-created)
│── requirements.txt         # Python dependencies
│── README.md                # Documentation

````

---

## ⚙️ Installation & Setup

1. Clone this repo (or copy the project folder).
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # (Windows: venv\Scripts\activate)
````

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Run the development server:

   ```bash
   uvicorn app.main:app --reload
   ```
