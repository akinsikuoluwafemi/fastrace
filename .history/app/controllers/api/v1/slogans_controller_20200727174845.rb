module API::V1
    class SlogansController < ApplicationController
        def index
            @riders = Rider.all
            render json: @riders
            
        end
    end
end