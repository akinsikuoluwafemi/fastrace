class Slogan < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :slogan, presence: true, length: {minimum: 10, maximum: 50}
end
