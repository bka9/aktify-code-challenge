from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Campaign(db.Model):
    id = db.Column(db.BigInteger, primary_key=True, nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(512))
    is_active = db.Column(db.Boolean, default=True)
    created_on = db.Column(db.TIMESTAMP, server_default=db.func.now())
    updated_on = db.Column(db.TIMESTAMP, server_default=db.func.now(), server_onupdate=db.func.now())

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'is_active': self.is_active,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
