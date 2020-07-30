module API::V1
    class SlogansController < ApplicationController
        def create
            @slogan = Slogan.new(slogan_params)
            
            if @slogan.save
                render json: @slogan, status: :created
            else 
                render json: @slogan.errors, status: :unprocessable_entity
            end
        end



        private

        def slogan_params 
            



    end
end