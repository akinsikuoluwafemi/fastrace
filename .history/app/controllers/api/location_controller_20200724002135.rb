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
                },
                {
                    first_name: 'Howard',
                   last_name: 'Thompson',
                    city: 'Hale',
                    state: 'MO',
                    lat: 40.06,
                    lng: -105.26
                },
                {
                    first_name: 'Maggie',
                   last_name: 'Lantz',
                    city: 'Dublin',
                    state: 'OH',
                    lat: 40.03,
                    lng: -105.23
                },

                {
                    first_name: 'Lawrence',
                   last_name: 'Duran',
                    city: 'Fort Myers',
                    state: 'FL',
                    lat: 40.03,
                    lng: -105.23
                },
                



            ]

        end
    end
end