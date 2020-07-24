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
                    lng: -105.35
                },
                {
                    first_name: 'Jason',
                   last_name: 'Finn',
                    city: 'Huntington Beach',
                    state: 'CA',
                    lat: 39.95,
                    lng: -105.24
                }



            ]

        end
    end
end