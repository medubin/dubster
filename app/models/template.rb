class Template < ApplicationRecord
    belongs_to :user
    has_many :template_fields

    accepts_nested_attributes_for :template_fields

end
