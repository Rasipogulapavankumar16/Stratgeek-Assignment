# backend/app/api/prs_reviewed.py

from flask import Blueprint, jsonify
from app.api.github_api import get_github_data

prs_reviewed_bp = Blueprint("prs_reviewed", __name__)

@prs_reviewed_bp.route("/api/prs-reviewed/<username>")
def get_prs_reviewed(username):
    github_data = get_github_data(username)
    # Implement logic to parse GitHub data and extract PRs reviewed
    # ...
    return jsonify(prs_reviewed)
