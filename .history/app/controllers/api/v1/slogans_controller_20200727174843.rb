module API::V1
    class SlosController < ApplicationController
        def index
            @riders = Rider.all
            render json: @riders
            
        end
    end
end