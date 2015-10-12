require 'rubygems'
require 'sinatra'
require 'mandrill'
m = Mandrill::API.new 'VhSJIlcktLnqNmy6LDWF9w'

configure do
  enable :sessions
end

helpers do
  def username
    session[:identity] ? session[:identity] : 'Stranger'
  end
end

before '/secure/*' do
  unless session[:identity]
    session[:previous_url] = request.path
    @error = 'Sorry, you need to be logged in to visit ' + request.path
    halt erb(:login_form)
  end
end

get '/' do
  erb :main
end

get '/how' do
  erb :howitworks
end

get '/orders' do
  erb :orders
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/login/form' do
  erb :login_form
end

post '/login/attempt' do
  session[:identity] = params['username']
  # where_user_came_from = session[:previous_url] || '/'
  # redirect to where_user_came_from
  redirect '/'
end

post '/receipt' do

  message = {
    subject: 'Help wanted by customer',
    from_name: params[:name],
    text: params[:wanted],
    to: [{ email: 'mikerobinson1@gmail.com', name: 'Recipient1' }],
    html: params[:wanted],
    from_email: params[:email]
  }
  sending = m.messages.send message
  puts sending
  erb :receipt
end

get '/logout' do
  session.delete(:identity)
  erb "<div class='alert alert-message'>Logged out</div>"
end

get '/secure/place' do
  erb 'This is a secret place that only <%=session[:identity]%> has access to!'
  redirect '/'
end
