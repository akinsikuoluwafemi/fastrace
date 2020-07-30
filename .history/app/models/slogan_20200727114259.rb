class Slogan < ApplicationRecord
    before_save { self.email = email.downcase }
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true,
                        uniqueness: { case_sensitive: false },
                        length: { maximum: 105 },
                        format: { with: VALID_EMAIL_REGEX }
    validates :slogan, presence: true, length: {minimum: 10, maximum: 50}
end
