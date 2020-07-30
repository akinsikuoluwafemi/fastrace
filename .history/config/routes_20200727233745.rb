Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
  
  

  namespace :api do
      namespace :v1 do
        resources :riders, only: :index
        resources :slogans, only: :create  
      end
  end

  root 'pages#index'

  match '*path', to: 'pages#index', via: :all

end

