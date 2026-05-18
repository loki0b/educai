from flask import request, jsonify
from app.models.lesson_plan import LessonPlan
from app.controllers.db import db


class LessonPlanController:
    def get_all(self):
        items = LessonPlan.query.all()

        return (
            jsonify(
                [
                    {c.name: getattr(item, c.name) for c in item.__table__.columns}
                    for item in items
                ]
            ),
            200,
        )

    def create(self):
        data = request.json

        new_plan = LessonPlan(
            title=data.get("title"),
            objective=data.get("objective"),
            syllabus=data.get("syllabus"),
            scheduled_date=data.get("scheduled_date"),
            subject=data.get("subject"),
            contents=data.get("contents"),
            learning_resources=data.get("learning_resources"),
            tags=data.get("tags"),
        )

        db.session.add(new_plan)
        db.session.commit()

        return jsonify({"message": "OK"}), 201

    def edit(self):
        data = request.json

        plan = db.session.get(LessonPlan, data.get("id"))
        if not plan:
            return jsonify({"message": "Not Found"}), 404

        for key, values in data.items():
            if hasattr(plan, key) and key != "id":
                setattr(plan, key, values)

        db.session.commit()

        return jsonify({"message": "Ok"}), 200

    def delete(self):
        data = request.json

        plan = db.session.get(LessonPlan, data.get("id"))
        if not plan:
            return jsonify({"message": "Not Found"}), 404

        db.session.delete(plan)
        db.session.commit()

        return jsonify({"message": "Success"}), 200
