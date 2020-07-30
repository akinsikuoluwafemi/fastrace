module API::V1
    class SlogansController < ApplicationController
        def create
            @slogan = Slogan.new(slogan_params)
            
            if @slogan.save
                render json: @slogan, status: :created
            begin
                
            rescue => exception
                
            else
                
            ensure
                
            end

        end
    end
end