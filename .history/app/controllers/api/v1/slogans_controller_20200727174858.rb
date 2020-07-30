module API::V1
    class SlogansController < ApplicationController
        def create
            
            render json: @riders
            
        end
    end
end