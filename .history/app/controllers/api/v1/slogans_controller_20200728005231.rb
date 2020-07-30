module API::V1
    class SlogansController < ApplicationController
    protect_from_forgery with: :null_session
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
            params.require(:slogan).permit(:first_name, :last_name, :email, :slogan)
        end

    end
end