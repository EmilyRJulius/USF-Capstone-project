"""Initialize Flask app."""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()


def create_app():
    """Construct the core application."""
    # breakpoint()
    app = Flask(__name__)
    CORS(app)
    # app.config.from_object("config.Config")
    
    # TODO: should loook like yours
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///dnd'
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    

    # Initialize Database Plugin
    db.init_app(app)

    with app.app_context():
        from . import routes  # Import routes

        db.create_all()  # Create database tables for our data models

        return app
