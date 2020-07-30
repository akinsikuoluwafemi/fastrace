class Rider < ApplicationRecord
   validates :first_name, presence: true
  validates :ingredients, presence: true
  validates :instruction, presence: true
end
