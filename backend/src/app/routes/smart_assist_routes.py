from flask import Blueprint
from app.controllers.smart_assist_controller import SmartAssist

smart_assist_bp = Blueprint("smart_assist", __name__)
controller = SmartAssist()

smart_assist_bp.add_url_rule(
    "/genContent", view_func=controller.generate_recommendations, methods=["POST"]
)
