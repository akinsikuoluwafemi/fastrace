module API::V1
    class SlogansController < ApplicationController
        def create
            @slogan = Slogan.new()
            
            
        end
    end
end