module API
    class LocationsController < ApplicationController
        def index
            locations = [
                {
                   first_name: 'Dustin',
                   last_name: 'Green',
                    city: 'Hickory Hills',
                    state: 'IL',
                    lat: 40.00,
                    
                }


            ]

        end
    end
end