module API::V1
    class RidersController < ApplicationController
        def index
            @riders = Rider.order(:id)
            render json: @riders
            
        end
    end
end