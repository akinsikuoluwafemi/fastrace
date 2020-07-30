module API::V1
    class RidersController < ApplicationController
        def index
            @rider = Rider.all
            render json: rider
            
        end
    end
end