# backend/app/routes/base_routes.py

from flask import Blueprint, jsonify

base_routes_bp = Blueprint("base_routes", __name__)

@base_routes_bp.route("/")
def home():
    return jsonify(message="Welcome to the API!")
