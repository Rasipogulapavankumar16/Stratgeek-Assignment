# backend/app/main.py

from flask import Flask
from app.routes.base_routes import base_routes_bp
from app.api.contributions import contributions_bp
from app.api.prs_created import prs_created_bp
from app.api.prs_reviewed import prs_reviewed_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(base_routes_bp)
app.register_blueprint(contributions_bp)
app.register_blueprint(prs_created_bp)
app.register_blueprint(prs_reviewed_bp)

if __name__ == "__main__":
    app.run(debug=True)
