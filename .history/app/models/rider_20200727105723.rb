class Rider < ApplicationRecord
    validates :first_name
    validates :last_name
    validates :city
    validates :state
    validates :lat
    validates :lng

end
