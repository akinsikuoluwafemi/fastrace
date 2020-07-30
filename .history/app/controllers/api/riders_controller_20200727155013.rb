module API
    class RidersController < ApplicationController
        def index
            rider = Rider.all.order(created_at: :desc)
            render json: rider
            
        end
    end
end