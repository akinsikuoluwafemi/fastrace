module API::V1
    class RidersController < ApplicationController
        def index
            @riders = Rider
            render json: @riders
            
        end
    end
end