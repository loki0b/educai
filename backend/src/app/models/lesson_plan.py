from app.controllers.db import db


class LessonPlan(db.Model):
    __tablename__ = "lesson_plans"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    objective = db.Column(db.Text, nullable=False)
    syllabus = db.Column(db.Text, nullable=False)
    scheduled_date = db.Column(db.Date, nullable=False)
    subject = db.Column(db.String(100), nullable=False)
    contents = db.Column(db.Text, nullable=False)
    learning_resources = db.Column(db.Text)
    tags = db.Column(db.String(200))
