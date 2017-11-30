class Type < ApplicationRecord
    belongs_to :user
    has_many :type_fields

    accepts_nested_attributes_for :type_fields

end
