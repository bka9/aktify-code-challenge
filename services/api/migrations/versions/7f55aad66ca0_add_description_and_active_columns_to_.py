"""Add description and active columns to campaign

Revision ID: 7f55aad66ca0
Revises: 6c369edd2a4c
Create Date: 2020-04-11 18:49:41.607236

"""
from alembic import op
from sqlalchemy import Column, Boolean, String


# revision identifiers, used by Alembic.
revision = '7f55aad66ca0'
down_revision = '6c369edd2a4c'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('campaign',
        Column('description', String(512))
    )
    op.add_column('campaign',
        Column('is_active', Boolean, default=True)
    )
    pass


def downgrade():
    op.drop_column('campaign', 'description')
    op.drop_column('campaign', 'is_active')
    pass
