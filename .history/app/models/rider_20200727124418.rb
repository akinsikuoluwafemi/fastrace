class Rider < ApplicationRecord
   validates :first, presence: true
  validates :ingredients, presence: true
  validates :instruction, presence: true
end
