module API::V1
    class RidersController < ApplicationController
        def index
            @riders = Rider.all
            render json: rider
            
        end
    end
end