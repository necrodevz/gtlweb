Rails.application.routes.draw do
  mount Spina::Engine => '/pages'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'app#index'
  get '/about', to: 'app#index'
  get '/services', to: 'app#index' 
  get '/business', to: 'app#index'
end
