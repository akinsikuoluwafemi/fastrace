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
                    lat: 40.04,
                    lng: -105.23
                },

                {
                    first_name: 'Irene',
                   last_name: 'Molina',
                    city: 'Tucson',
                    state: 'AZ',
                    lat: 39.96,
                    lng: -105.22
                },
                {
                    first_name: 'Nancy',
                   last_name: 'Garner',
                    city: 'Baltimore',
                    state: 'MD',
                    lat: 39.98,
                    lng: -105.21
                },
                {
                    first_name: 'Tara',
                   last_name: 'Taylor',
                    city: 'Baltimore',
                    state: 'MD',
                    lat: 39.98,
                    lng: -105.21
                },
                



            ]

        end
    end
end