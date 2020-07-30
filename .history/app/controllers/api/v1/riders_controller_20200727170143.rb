module API::V1
    class RidersController < ApplicationController
        def index
            @riders = Rider.all.order(created_at: :desc)
            render json: @riders
            
        end
    end
end