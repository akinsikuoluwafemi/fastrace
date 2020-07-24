module API
    class LocationsController < ApplicationController
        def index
            locations = [
                {
                   first_name: 'Dustin',
                   last_name: 'Green',
                    city: 'Hickory Hills',
                    state: ''
                }


            ]

        end
    end
end