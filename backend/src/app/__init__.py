from flask import Flask
from app.controllers.db import db
from app.routes.lesson_plan_routes import lesson_plan_bp
from config import Config


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)

    app.json.ensure_ascii = False

    app.register_blueprint(lesson_plan_bp, url_prefix="/api")

    with app.app_context():
        db.create_all()

    return app
