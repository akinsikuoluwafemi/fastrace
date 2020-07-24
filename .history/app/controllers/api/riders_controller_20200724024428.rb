module API
    class RidersController < ApplicationController
        def index
            biodata = [
                {
                    id: 1,
                   first_name: 'Dustin',
                   last_name: 'Green',
                    city: 'Hickory Hills',
                    state: 'IL',
                    lat: 40.00,
                    lng: -105.35
                },
                {
                    id: 2,
                    first_name: 'Jason',
                   last_name: 'Finn',
                    city: 'Huntington Beach',
                    state: 'CA',
                    lat: 39.95,
                    lng: -105.24
                },
                {
                    id: 3,
                    first_name: 'Howard',
                   last_name: 'Thompson',
                    city: 'Hale',
                    state: 'MO',
                    lat: 40.06,
                    lng: -105.26
                },
                {
                    id: 4,
                    first_name: 'Maggie',
                   last_name: 'Lantz',
                    city: 'Dublin',
                    state: 'OH',
                    lat: 40.03,
                    lng: -105.23
                },

                {
                    id: 5,
                    first_name: 'Lawrence',
                   last_name: 'Duran',
                    city: 'Fort Myers',
                    state: 'FL',
                    lat: 40.04,
                    lng: -105.23
                },

                {
                    id: 6,
                    first_name: 'Irene',
                   last_name: 'Molina',
                    city: 'Tucson',
                    state: 'AZ',
                    lat: 39.96,
                    lng: -105.22
                },
                {
                    id: 7,
                    first_name: 'Nancy',
                   last_name: 'Garner',
                    city: 'Baltimore',
                    state: 'MD',
                    lat: 39.98,
                    lng: -105.21
                },
                {
                    id: 8,
                    first_name: 'Tara',
                   last_name: 'Taylor',
                    city: 'Minneapolis',
                    state: 'MN',
                    lat: 40.00,
                    lng: -105.25
                },
                {
                    id: 9,
                    first_name: 'Alejandro',
                    last_name: 'Smith',
                    city: 'Scarborough',
                    state: 'ME',
                    lat: 40.02,
                    lng: -105.26
                },
                {
                    id: 10,
                    first_name: 'Tricia',
                    last_name: 'Renshaw',
                    city: 'Mystic',
                    state: 'CT',
                    lat: 40.02,
                    lng: -105.30
                },
                {
                    id: 11,
                    first_name: 'Travis',
                    last_name: 'Cook',
                    city: 'Twin Lakes',
                    state: 'WI',
                    lat: 40.01,
                    lng: -105.20
                },

                {
                    id: 12,
                    first_name: 'Joan',
                    last_name: 'Brooks',
                    city: 'Norfolk',
                    state: 'VA',
                    lat: 39.98,
                    lng: -105.24
                },
                {
                    id: 13,
                    first_name: 'Joseph',
                    last_name: 'Rodgers',
                    city: 'Wayne',
                    state: 'NJ',
                    lat: 39.99,
                    lng: -105.25
                },
                {
                    id: 14,
                    first_name: 'Matthew',
                    last_name: 'Gregson',
                    city: 'Brashear',
                    state: 'MO',
                    lat: 40.01,
                    lng: -105.29
                },
                {
                    id: 15,
                    first_name: 'Katie',
                    last_name: 'Dunlap',
                    city: 'Marion',
                    state: 'VA',
                    lat: 39.97,
                    lng: -105.27
                },
                {
                    id: 16,
                    first_name: 'Leo',
                    last_name: 'Howard',
                    city: 'Dallas',
                    state: 'TX',
                    lat: 39.97,
                    lng: -105.33
                },
                {
                    id: 17,
                    first_name: 'Maria',
                    last_name: 'Baisden',
                    city: 'Raleigh',
                    state: 'NC',
                    lat: 40.00,
                    lng: -105.29
                },
                {
                    id:
                    first_name: 'Sandy',
                    last_name: 'Townsend',
                    city: 'Newport',
                    state: 'PA',
                    lat: 40.05,
                    lng: -105.30
                },

                {
                    first_name: 'Melinda',
                    last_name: 'Stephenson',
                    city: 'Kahului',
                    state: 'HI',
                    lat: 39.99,
                    lng: -105.31
                },
                {
                    first_name: 'Jason',
                    last_name: 'Nichols',
                    city: 'Alexandria',
                    state: 'VA',
                    lat: 40.01,
                    lng: -105.32
                },

            ]

            render json: { riders: biodata }

        end
    end
end