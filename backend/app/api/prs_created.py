# backend/app/api/prs_created.py

from flask import Blueprint, jsonify
from app.api.github_api import get_github_data

prs_created_bp = Blueprint("prs_created", __name__)

@prs_created_bp.route("/api/prs-created/<username>")
def get_prs_created(username):
    github_data = get_github_data(username)
    # Implement logic to parse GitHub data and extract PRs created
    # ...
    return jsonify(prs_created)
