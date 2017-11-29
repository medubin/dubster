class Type < ApplicationRecord
    belongs_to :user
    has_many :type_fields

end
