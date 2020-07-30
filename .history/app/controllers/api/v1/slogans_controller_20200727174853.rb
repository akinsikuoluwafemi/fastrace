module API::V1
    class SlogansController < ApplicationController
        def create
            @riders = Rider.all
            render json: @riders
            
        end
    end
end