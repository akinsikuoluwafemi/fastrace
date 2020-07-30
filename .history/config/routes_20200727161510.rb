Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
  
  

  namespace :api, defaults: { format: 'json' } do
    resources :riders, only: :index
  end

  root 'pages#index'





  match '*path', to: 'pages#index', via: :all

end

