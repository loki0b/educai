from flask import Blueprint
from app.controllers.lesson_plan_controller import LessonPlanController

lesson_plan_bp = Blueprint("lesson_plan", __name__)
controller = LessonPlanController()

# lesson_plan_bp.add_url_rule(
#   "/getAll",
#   view_func=controller.get_all,
#   methods=["GET"]
# )

lesson_plan_bp.add_url_rule("/create", view_func=controller.create, methods=["POST"])

lesson_plan_bp.add_url_rule("/edit", view_func=controller.edit, methods=["POST"])

lesson_plan_bp.add_url_rule("/delete", view_func=controller.delete, methods=["POST"])
