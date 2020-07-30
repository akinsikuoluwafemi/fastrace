class Rider < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :lat, presence: true
  validates :lng, presence: true

end
