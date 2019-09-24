Rails.application.routes.draw do
  resources :organizations
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match '/vue/*other' => 'vue#vue_transfer', via: %i[get]
end
