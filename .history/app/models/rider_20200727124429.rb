class Rider < ApplicationRecord
   validates :first_name, presence: true
  validates :last_name, presence: true
  validates :instruction, presence: true
end
