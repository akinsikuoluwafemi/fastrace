module API
    class RidersController < ApplicationController
        def index
            rider = Rider.all.order(cre

            render json: rider
            
        end
    end
end