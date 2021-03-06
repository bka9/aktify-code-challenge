from flask import Blueprint
from flask.json import jsonify
from src.models import Campaign
from src.models import db
from flask import request

campaign_blueprint = Blueprint('campaigns', __name__, url_prefix='/campaigns')


@campaign_blueprint.route('/', methods=['GET'])
def index():
    campaigns = Campaign.query.all()
    return jsonify([campaign.serialize for campaign in campaigns])

@campaign_blueprint.route('/', methods=['POST'])
def create():
    data = request.get_json()
    campaign = Campaign(name = data['name'], description = data.get('description'), is_active = data.get('is_active'))
    db.session.add(campaign)
    db.session.commit()
    db.session.refresh(campaign)
    return jsonify(campaign.serialize)

@campaign_blueprint.route('/<campaign_id>', methods=['GET'])
def get(campaign_id):
    if not campaign_id.isdigit():
        return jsonify({'message': 'id must be an integer'}), 422

    campaign = Campaign.query.get(campaign_id)

    if not campaign:
        return jsonify({'message': 'Campaign not found.'}), 404

    return jsonify(campaign.serialize)
