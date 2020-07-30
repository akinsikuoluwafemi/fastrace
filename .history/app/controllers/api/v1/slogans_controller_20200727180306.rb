module API::V1
    class SlogansController < ApplicationController
        def create
            @slogan = Slogan.create()
            
            
        end
    end
end