module API::V1
    class SlogansController < ApplicationController
        def create
            @slogan = Slogan.new(slogan_params)
            
            if @slogan
            
        end
    end
end